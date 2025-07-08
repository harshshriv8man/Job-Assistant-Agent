"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import EmptyState from "../_components/EmptyState";
import { useState } from "react";
import axios from "axios";

function AiChat() {

    const [userInput, setUserInput] = useState<string>();

    const onSend=async()=>{
        const result = await axios.post('/api/user/ai-chat',{
            userInput: userInput
        })
    }

    return (
        <div className="px-10 md:px-24 lg:px-36 xl:px-48">
            <div className="flex items-center justify-between gap-8">
                <div>
                    <h2 className="font-bold text-lg"> AI Job Assistant Chat </h2>
                    <p> Make smarter career decisions faster, more organized way with our AI Job Assistant!</p>
                </div>
                <Button> + New Chat </Button>
            </div>
            <div className="flex flex-col h-[75vh]">
                <div className="mt-5">
                    {/*Empty State Options */}
                    <EmptyState selectedQuestion={(question:string)=>setUserInput(question)}/>
                </div>

                <div className="flex-1">
                    {/* Message List */}
                </div>

                <div className="flex justify-between items-center gap-6">
                    {/* Input Field */}
                    <Input placeholder="Type your question here..." value={userInput}
                    onChange={(event)=>setUserInput(event.target.value)} />
                    <Button onClick={onSend}> <Send /> </Button>
                </div>
            </div>
        </div>
    )
}

export default AiChat;
