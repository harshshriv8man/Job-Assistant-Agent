import React, { useState } from "react";
import { File, Loader, LoaderIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";

function ResumeUploadDialog({ openResumeUpload, setOpenResumeDialog }: any) {
    const [file, setFile] = useState<any>();
    const [loading,setLoading] = useState(false);

    const onFileChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file.name);
            setFile(file);
        }
    };

    const onUploadAndAnalyze=async()=>{
        setLoading(true);
        const recordId = uuidv4();
        const formData = new FormData();
        formData.append("recordId", recordId);
        formData.append("resumeFile", file);
        formData.append("aiAgentType", "/ai-tools/ai-resume-analyzer");
        // Send FormData to Backend Server
        const result = await axios.post('/api/user/ai-resume-agent',formData)
        console.log(result.data);
        setLoading(false);
    }

    return (
        <Dialog open={openResumeUpload} onOpenChange={setOpenResumeDialog}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload Your Resume</DialogTitle>
                    <DialogDescription>
                        <div>
                            <label
                                htmlFor="resumeUpload"
                                className="flex items-center flex-col justify-center p-7 border border-dashed hover:bg-slate-200 cursor-pointer"
                            >
                                <File className="h-10 w-10" />
                                {file ? (
                                    <h2 className="mt-3 text-blue-600">{file?.name}</h2>
                                ) : (
                                    <h2 className="mt-3">Click Here to Upload PDF File</h2>
                                )}
                            </label>
                            <input
                                type="file"
                                id="resumeUpload"
                                accept="application/pdf"
                                className="hidden"
                                onChange={onFileChange}
                            />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={"outline"}>Cancel</Button>
                    <Button onClick={onUploadAndAnalyze} disabled={!file || loading}>
                        {loading? <LoaderIcon className="animate-spin"/>:<Sparkles />}
                        Upload & Analyze
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ResumeUploadDialog;
