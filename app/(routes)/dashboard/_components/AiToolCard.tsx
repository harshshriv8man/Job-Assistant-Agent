"use client"; // This tells Next.js that this is a client-side component
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";

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

    const onClickButton = async () => {
        // Create new record to history table
        const result = await axios.post('/api/user/history', {
            recordId: id,
            content: []
        });
    }

    return (
        <div className="p-3 border rounded-lg">
            <Image src={tool.icon} width={40} height={40} alt={tool.name}/>
            <h2 className="font-bold mt-2">{tool.name}</h2>
            <p className="text-gray-400">{tool.desc}</p>
            <Link href={tool.path + "/" + id}>
                <Button className="w-full mt-3" onClick={onClickButton}>{tool.button}</Button>
            </Link>
        </div>
    );
}

export default AiToolCard;
