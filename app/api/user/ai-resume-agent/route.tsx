import { NextRequest, NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { inngest } from "@/inngest/client";
import axios from "axios";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const resumeFile: any = formData.get("resumeFile");
    const recordId = formData.get("recordId");
    const user = await currentUser();

    const loader = new WebPDFLoader(resumeFile);
    const docs = await loader.load();
    console.log(docs[0]);

    const arrayBuffer = await resumeFile.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    // Send data to Inngest for processing
    const resultIds = await inngest.send({
        name: "AiResumeAgent",
        data: {
            recordId,
            base64ResumeFile: base64,
            pdfText: docs[0]?.pageContent,
            aiAgentType: "/ai-tools/ai-resume-analyzer",
            userEmail: user?.primaryEmailAddress?.emailAddress,
        }
    });

    const runId = resultIds?.ids[0];

    let runStatus;
    while (true) {
        runStatus = await getRuns(runId);
        if (runStatus?.data[0]?.status === "Completed") {
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    try {
        // Log the raw AI response to inspect it
        console.log("Raw output:", runStatus.data?.[0].output?.output[0]);

        // Ensure the response is JSON serializable
        const sanitizedOutput = sanitizeOutput(runStatus.data?.[0].output?.output[0]);

        // Return the sanitized JSON response
        return NextResponse.json(sanitizedOutput);
    } catch (error) {
        console.error('Error serializing the data:', error);
        return NextResponse.json({ error: "Error serializing the data" }, { status: 500 });
    }
}

// Function to sanitize the AI response before returning it
const sanitizeOutput = (output: any) => {
    try {
        // If the output contains functions or non-serializable data, remove them
        const sanitized = JSON.parse(JSON.stringify(output)); // Remove any non-serializable data
        return sanitized;
    } catch (error) {
        console.error('Error sanitizing the output:', error);
        return {}; // Return an empty object if sanitization fails
    }
}

export async function getRuns(runId: string) {
    const result = await axios.get(`${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`, {
        headers: {
            Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
        },
    });
    return result.data;
}
