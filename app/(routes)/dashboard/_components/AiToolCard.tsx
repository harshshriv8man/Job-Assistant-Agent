"use client"; // This tells Next.js that this is a client-side component

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import ResumeUploadDialog from "./ResumeUploadDialog";

interface TOOL {
    name: string;
    desc: string;
    icon: string; 
    button: string;
    path: string;
}

type AIToolProps = {
    tool: TOOL;
}

function AiToolCard({ tool }: AIToolProps) {
    const id = uuidv4();
    const { user } = useUser();
    const router = useRouter();
    const [openResumeUpload, setOpenResumeUpload] = useState(false);

    const onClickButton = async () => {
        if (tool.name === 'AI Resume Analyzer') {
            setOpenResumeUpload(true); // Open the Resume Upload Dialog
            return; // Stop further processing for this tool
        }
        // Create new record to history table for other tools
        const result = await axios.post('/api/user/history', {
            recordId: id,
            content: []
        });
        console.log(result);
        router.push(tool.path + "/" + id); // Navigate to the tool's path if not the AI Resume Analyzer
    };

    return (
        <div className="p-3 border rounded-lg">
            <Image src={tool.icon} width={40} height={40} alt={tool.name} />
            <h2 className="font-bold mt-2">{tool.name}</h2>
            <p className="text-gray-400">{tool.desc}</p>
            <Button className="w-full mt-3" onClick={onClickButton}>
                {tool.button}
            </Button>
            <ResumeUploadDialog openResumeUpload={openResumeUpload} setOpenResumeDialog={setOpenResumeUpload} />
        </div>
    );
}

export default AiToolCard;
