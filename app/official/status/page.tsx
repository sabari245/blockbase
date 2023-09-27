import { Button } from "@/components/ui/button";
import { fileData, fileTableColumns } from "./columns";
import { FileTable } from "./data-table";
import { FileUploadForm } from "./upload-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function Page() {
    return (
        <main className="flex flex-grow min-h-screen flex-col">
            <Dialog>
                <div className="flex justify-between items-center mb-6">
                    <h3>Your Documents</h3>
                    <DialogTrigger><Button><Plus size={20} /> Add Document</Button></DialogTrigger>
                </div>
                <FileTable columns={fileTableColumns} data={fileData} />

                {/* Dialog  */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Upload your file</DialogTitle>
                        <DialogDescription>
                            Kindly upload the file with the corresponding signature
                        </DialogDescription>
                    </DialogHeader>
                    <FileUploadForm />
                </DialogContent>
            </Dialog>
        </main>
    )
}