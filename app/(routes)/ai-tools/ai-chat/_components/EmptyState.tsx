import React from "react";

const questionList = [
    'What are the best practices for writing a resume?',
    'How can I prepare for a job interview?',
    'What skills do I need for a software engineering job?'
]

function EmptyState({selectedQuestion}:any) {
    return (
        <div>
            <h2 className="font-bold text-xl text-center">Ask anything to AI Job Assistant</h2>
            <div>
                {questionList.map((question, index) => (
                    <h2 className="p-4 text-center border rounded-lg my-3 hover:border-primary cursor-pointer" 
                    key={index}
                    onClick={()=>selectedQuestion(question)}> {question} </h2> 
                ))}
            </div>
        </div>
    )
}

export default EmptyState;
