import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export type Case = {
    id: string;
    caseNumber: string;
    caseType: string;
    incidentDate: string;
    location: string;
    description: string;
    caseFile: string[];
}

export const caseTableColumns: ColumnDef<Case>[] = [
    {
        accessorKey: "id",
        header: "S.No",
    },
    {
        accessorKey: "caseNumber",
        header: "Case Number",
    },
    {
        accessorKey: "caseType",
        header: "Case Type",
    },
    {
        accessorKey: "incidentDate",
        header: "Incident Date",
    },
    {
        accessorKey: "location",
        header: "Location",
    },
]

export const caseData: Case[] = [
    {
        id: "1",
        caseNumber: "12345",
        caseType: "Type A",
        incidentDate: "2023-09-27",
        location: "Sample Location 1",
        description: "This is a sample description 1.",
        caseFile: ["file1.txt", "file2.txt"],
    },
    {
        id: "2",
        caseNumber: "67890",
        caseType: "Type B",
        incidentDate: "2023-09-28",
        location: "Sample Location 2",
        description: "This is a sample description 2.",
        caseFile: ["file3.txt"],
    },
    {
        id: "3",
        caseNumber: "54321",
        caseType: "Type C",
        incidentDate: "2023-09-29",
        location: "Sample Location 3",
        description: "This is a sample description 3.",
        caseFile: ["file4.txt"],
    },
]
