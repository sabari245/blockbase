import { Description } from "@/components/description";

export default function Page() {
    return (
        <main className="flex justify-center">
            <div className="md:max-w-screen-2xl my-24 px-12">
            <h4 className="text-gray-600 text-lg mb-3">About the project</h4>
            <Description />
            </div>
        </main>
    )
}