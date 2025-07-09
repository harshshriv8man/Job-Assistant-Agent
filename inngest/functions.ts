import { db } from "@/configs/db";
import { inngest } from "./client";  // Ensure correct import
import { createAgent, anthropic, openai, gemini } from '@inngest/agent-kit';
import { create } from "domain";
import ImageKit from 'imagekit';
import { HistoryTable } from "@/configs/schema";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const AiJobAssistantAgent = createAgent({
  name:"AI Job Assistant",
  description: "An AI Job Assistant that helps users with job-related queries.",
  system: `You are a helpful AI job assistant designed to guide users in finding job opportunities, optimizing resumes, preparing for interviews, and offering career advice. Be empathetic, professional, and provide personalized recommendations based on users' skills and goals.`,
  model: gemini({
    model:"gemini-2.5-pro",
    apiKey: process.env.GEMINI_API_KEY
  })
})

export const AiResumeAnalyzerAgent=createAgent({
  name: 'AiResumeAnalyzerAgent',
  description:'',
  system:`You are an advanced AI Resume Analyzer Agent.

Your task is to evaluate a candidate's resume and return a detailed analysis in the following structured JSON schema format.

The schema must match the layout and structure of a visual UI that includes overall score, section scores, summary feedback, improvement tips, strengths, and weaknesses.



📤 INPUT: I will provide a plain text resume.

🎯 GOAL: Output a JSON report as per the schema below. The report should reflect:



overall_score (0–100)



overall_feedback (short message e.g., "Excellent", "Needs improvement")



summary_comment (1–2 sentence evaluation summary)



Section scores for:



Contact Info



Experience



Education



Skills



Each section should include:



score (as percentage)



Optional comment about that section



Tips for improvement (3–5 tips)



What’s Good (1–3 strengths)



Needs Improvement (1–3 weaknesses)



🧠 Output JSON Schema:

json

Copy

Edit

{

  "overall_score": 85,

  "overall_feedback": "Excellent!",

  "summary_comment": "Your resume is strong, but there are areas to refine.",

  "sections": {

    "contact_info": {

      "score": 95,

      "comment": "Perfectly structured and complete."

    },

    "experience": {

      "score": 88,

      "comment": "Strong bullet points and impact."

    },

    "education": {

      "score": 70,

      "comment": "Consider adding relevant coursework."

    },

    "skills": {

      "score": 60,

      "comment": "Expand on specific skill proficiencies."

    }

  },

  "tips_for_improvement": [

    "Add more numbers and metrics to your experience section to show impact.",

    "Integrate more industry-specific keywords relevant to your target roles.",

    "Start bullet points with strong action verbs to make your achievements stand out."

  ],

  "whats_good": [

    "Clean and professional formatting.",

    "Clear and concise contact information.",

    "Relevant work experience."

  ],

  "needs_improvement": [

    "Skills section lacks detail.",

    "Some experience bullet points could be stronger.",

    "Missing a professional summary/objective."

  ]

} 
`,
  model: gemini({
    model:"gemini-2.5-pro",
    apiKey: process.env.GEMINI_API_KEY
  })

})

export const AiJobAssistant = inngest.createFunction(
  {id:"AiJobAssistant"},
  {event:"AiJobAssistant"},
  async ({ event, step }) => {
    const {userInput} = await event?.data;
    const result = await AiJobAssistantAgent.run(userInput);
    return result;
  }
)

var imagekit = new ImageKit({
  //@ts-ignore
  publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
  //@ts-ignore
  privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
  //@ts-ignore
  urlEndpoint : process.env.IMAGEKIT_ENDPOINT_URL
});

export const AiResumeAgent=inngest.createFunction(
  {id:"AiResumeAgent"},
  {event:"AiResumeAgent"},
  async({event,step})=>{
    const {recordId, base64ResumeFile,pdfText,aiAgentType,userEmail} = await event.data;
    // Upload file to cloud
    const uploadFileUrl = await step.run("uploadImage",async()=>{
      const imageKitFile =  await imagekit.upload({
        file: base64ResumeFile,
        fileName: `${Date.now()}.pdf`,
        isPublished: true
      })
      return imageKitFile.url;
    })
    const aiResumeReport = await AiResumeAnalyzerAgent.run(pdfText);
    //@ts-ignore
    const rawContent=aiResumeReport.output[0].content;
    const rawContentJson = rawContent.replace('```json','').replace('```','');
    const parseJson = JSON.parse(rawContentJson);
    // return parseJson;

    // Save to Database
      const saveToDb = await step.run('SaveToDb',async()=>{
      const result = await db.insert(HistoryTable).values({
        recordId: recordId,
        content: parseJson,
        aiAgentType: aiAgentType,
        createdAt: (new Date()).toString(),
        userEmail: userEmail,
        metaData: uploadFileUrl
      });
      console.log(result);
      return parseJson;
    })
  }
)
