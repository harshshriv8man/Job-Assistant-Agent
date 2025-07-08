import React, { useState } from "react";
import { File, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
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

    const onFileChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file.name);
            setFile(file);
        }
    };

    const onUploadAndAnalyze=()=>{
        const recordId = uuidv4();
        const formData = new FormData();
        formData.append("recordId", recordId);
        formData.append("resumeFile", file);
        // Send FormData to Backend Server
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
                    <Button>
                        <Sparkles />
                        Upload & Analyze
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ResumeUploadDialog;
