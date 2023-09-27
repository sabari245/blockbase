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
import { Textarea } from "@/components/ui/textarea"


type CaseFormValues = {
    caseNumber: string;
    caseType: string;
    incidentDate: string;
    location: string;
    description: string;
    caseFile: FileList;
};

export function CaseForm() {
    const form = useForm<CaseFormValues>();

    async function onSubmit(formData: CaseFormValues) {
        // Handle form submission
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="caseNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Case Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter case number" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="caseType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Case Type</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter case type" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="incidentDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Incident Date</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter location" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter case description"
                                    {...field}
                                    rows={4}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                {/* Field for file upload */}
                {/* @ts-ignore */}
                <FormField
                    control={form.control}
                    name="caseFile"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Upload Case File</FormLabel>
                            <FormControl>
                                {/* @ts-ignore */}
                                <Input type="file" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Create Case</Button>
            </form>
        </Form>
    );
}
