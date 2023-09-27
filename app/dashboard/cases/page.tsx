import { caseData, caseTableColumns } from "./columns";
import { FileTable } from "./data-table";

export default function Page() {
    return (
        <main className="flex flex-grow min-h-screen flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3>Current Cases</h3>
            </div>
            <FileTable columns={caseTableColumns} data={caseData} />
        </main>
    )
}