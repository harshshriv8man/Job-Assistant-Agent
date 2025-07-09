"use client";
import { useParams } from "next/navigation";
import React from "react";

function AiResumeAnalyzer() {
    const {recordid} = useParams();
    return (
        <div>AiToolCard {recordid} </div>
    )
}

export default AiResumeAnalyzer;
