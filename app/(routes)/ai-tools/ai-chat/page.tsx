import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

function AiChat() {
    return (
        <div className="px-10 md:px-24 lg:px-36 xl:px-48">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-bold text-lg"> AI Job Assistant Chat </h2>
                    <p> Make smarter career decisions faster and in a more organized way with our AI Job Assistant, ready to answer any career related questions!</p>
                </div>
                <Button> + New Chat </Button>
            </div>
            <div className="flex flex-col h-[75vh]">
                <div>
                    {/*Empty State Options */}
                </div>

                <div className="flex-1">
                    {/* Message List */}
                </div>

                <div className="flex justify-between items-center gap-6">
                    {/* Input Field */}
                    <Input placeholder="Type your question here..." />
                    <Button> <Send /> </Button>
                </div>
            </div>
        </div>
    )
}

export default AiChat;
