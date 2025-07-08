"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Send } from "lucide-react";
import EmptyState from "../_components/EmptyState";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams } from "next/navigation";

type messages = {
    content: string;
    role: string;
    type: string;
};

function AiChat() {
    const [userInput, setUserInput] = useState<string>(''); 
    const [loading, setLoading] = useState(false);
    const [messageList, setMessageList] = useState<messages[]>([]); // Start with an empty message list
    const {chatid} = useParams();
    console.log(chatid);


    const onSend = async () => {
        setLoading(true);
        setMessageList(prev => [
            ...prev,
            {
                content: userInput,
                role: 'user',
                type: 'text'
            }
        ]);
        setUserInput('');

        const result = await axios.post('/api/user/ai-chat', {
            userInput: userInput
        });
        console.log(result.data);
        setMessageList(prev => [...prev, result.data]);
        setLoading(false);
    };
    
    console.log(messageList);

    useEffect(() => {
        // Save Messages into Database
    }, [messageList]);

    // Show Empty State if message list is empty
    const isEmptyStateVisible = messageList.length === 0;

    return (
        <div className="px-10 md:px-24 lg:px-36 xl:px-48">
            <div className="flex items-center justify-between gap-8 mb-8">
                <div>
                    <h2 className="font-bold text-lg">AI Job Assistant Chat</h2>
                    <p>Make smarter career decisions faster, more organized with our AI Job Assistant, ready to answer any of your questions!</p>
                </div>
                <Button>+ New Chat</Button>
            </div>

            <div className="flex flex-col h-[75vh]">

                {/* Empty State */}
                {isEmptyStateVisible && (
                    <div className="mt-5">
                        <EmptyState selectedQuestion={(question: string) => setUserInput(question)} />
                    </div>
                )}

                {/* Message List */}
                <div className="flex-1 overflow-auto">
                    {messageList?.map((message, index) => (
                        <div key={index} className="mb-2">
                            <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`p-3 rounded-lg gap-2 ${message.role === 'user' ? 'bg-gray-200 text-black' : 'bg-gray-50 text-black'}`}>
                                    <ReactMarkdown>
                                        {message.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                            
                            {/* Loader Circle (Displayed only for the last message while loading) */}
                            {loading && messageList?.length - 1 === index && (
                                <div className="flex justify-start p-3 rounded-lg gap-2 bg-gray-50 text-black mb-2 mt-3">
                                    <LoaderCircle className="animate-spin" /> Thinking...
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Input Section */}
                <div className="flex justify-between items-center gap-6 mt-4">
                    <Input
                        placeholder="Type your question here..."
                        value={userInput}
                        onChange={(event) => setUserInput(event.target.value)}
                    />
                    <Button onClick={onSend} disabled={loading}>
                        <Send />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AiChat;
