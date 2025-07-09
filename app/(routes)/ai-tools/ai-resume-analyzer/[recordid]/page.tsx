"use client";
import { useParams } from "next/navigation";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Report from "./_components/Report";

function AiResumeAnalyzer() {
    const {recordid} = useParams();
    const [pdfUrl,setPdfUrl] = useState();
    const [aiReport, setAiReport] = useState();
    useEffect(()=>{
        recordid && GetResumeAnalyzerRecord();
    },[recordid])
    const GetResumeAnalyzerRecord=async()=>{
        const result = await axios.get('/api/user/history?recordId=' + recordid);
        console.log(result.data);
        setPdfUrl(result.data?.metaData);
        setAiReport(result.data?.content);
    }
    return (
        <div className="grid lg:grid-cols-5 grid-cols-1">
            <div className="col-span-2">
                <Report aiReport={aiReport}/>
            </div>
            <div className="col-span-3">
                <h2 className="font-bold text-2xl mb-5">Resume Preview</h2>
                <iframe
                    src={pdfUrl+'#toolbar=0&navpanes=0&scrollbar=0'}
                    width={'100%'}
                    height={1200}
                    className="min-w-lg"
                    style={{
                         border:'none'
                    }}/>
            </div>

        </div>
    )
}

export default AiResumeAnalyzer;
