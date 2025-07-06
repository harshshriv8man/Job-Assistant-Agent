import React from "react";
import AiToolCard from "./AiToolCard";

const aiToolsList = [
    {
        name: 'AI Assistant Chat',
        desc: 'Chat with AI Agent',
        icon: '/chatbot.png', 
        button: 'Chat Now',
        path: '/ai-career-chat'
    },
    {
        name: 'AI Resume Analyzer',
        desc: 'Improve Your Resume',
        icon: '/resume.png', 
        button: 'Analyze Now',
        path: '/ai-resume-analyzer'
    },
    {
        name: 'Job Search Assistant',
        desc: 'Store your profile info',
        icon: '/roadmap.png', 
        button: 'Get Started',
        path: '/career-roadmap-generator'
    },
    {
        name: 'Application Tracker',
        desc: 'Track Your Applications',
        icon: '/cover.png', 
        button: 'Store Now',
        path: '/tracker-generator'
    }
];

function AiTools() {
    return (
        <div className="mt-7 p-5 bg-white border rounded-xl">
            <h2 className="font-bold text-lg">Available AI Tools</h2>
            <p>Let's Start Building Your Career</p>

            <div>
                {aiToolsList.map((tool, index) => (
                    <div key={index}>
                        <AiToolCard tool={tool} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AiTools;