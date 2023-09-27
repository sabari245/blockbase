import { Button } from "@/components/ui/button";
import { caseData, caseTableColumns } from "./columns";
import { FileTable } from "./data-table";
import { FileUploadForm } from "./upload-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Page() {
    return (
        <main className="flex flex-grow min-h-screen flex-col">
            <Dialog>
                <div className="flex justify-between items-center mb-6">
                    <h3>Current Records</h3>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="text" placeholder="Case Number" />
                        <Button type="submit">Search</Button>
                    </div>
                </div>
                <FileTable columns={caseTableColumns} data={caseData} />

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