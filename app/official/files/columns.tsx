import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export type File = {
    id: string;
    title: string;
    url: string;
    status: "signed" | "unsigned" | "invalid";
}

export const fileTableColumns: ColumnDef<File>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "url",
        header: "Url",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
]

export const fileData: File[] = [
    {
        id: "728ed52f",
        title: "file1.pdf",
        url: "https://example.com/file1.pdf",
        status: "signed",
    },
    {
        id: "489e1d42",
        title: "file2.docx",
        url: "https://example.com/file2.docx",
        status: "unsigned",
    },
    {
        id: "3a7b9c1e",
        title: "file3.jpg",
        url: "https://example.com/file3.jpg",
        status: "invalid",
    },
    {
        id: "9f6d8e2c",
        title: "file4.txt",
        url: "https://example.com/file4.txt",
        status: "unsigned",
    },
]