"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type MintFormValues = {
    documentName: string;
    shortDescription: string;
    file: FileList;
};

export function FileUploadForm() {
    const form = useForm<MintFormValues>();


    async function onSubmit(formData: MintFormValues) {
        // Handle form submission
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="documentName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Document Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter document name" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="shortDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Optional Short Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter short description" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>File</FormLabel>
                            <FormControl>
                                {/* @ts-ignore */}
                                <Input type="file" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
