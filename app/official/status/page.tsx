import { Button } from "@/components/ui/button";
import { caseData, caseTableColumns } from "./columns";
import { FileTable } from "./data-table";
import { Input } from "@/components/ui/input";

export default function Page() {
    return (
        <main className="flex flex-grow min-h-screen flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3>Current Records</h3>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Case Number" />
                    <Button type="submit">Search</Button>
                </div>
            </div>
            <FileTable columns={caseTableColumns} data={caseData} />
        </main>
    )
}