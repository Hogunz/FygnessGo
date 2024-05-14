import { Button } from "@material-tailwind/react";
import { useForm } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function Index({ testimonials }) {
    const { delete: destroy } = useForm({});
    function forceDelete(id) {
        destroy(route("testimonials.forceDelete", id));
    }

    return (
        <>
            <Guest>
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg pt-24">
                    <div class="border-b border-gray-200 bg-white p-6">
                        <div class="mb-2 flex justify-end">
                            <a
                                href={route("testimonials.create")}
                                className="href"
                            >
                                <Button>Create</Button>
                            </a>
                        </div>
                        <table class="min-w-full table-auto">
                            <thead>
                                <tr class="bg-gray-300">
                                    <th class="px-3 py-2 uppercase tracking-tight">
                                        ID
                                    </th>
                                    <th class="px-3 py-2 uppercase tracking-tight">
                                        Image
                                    </th>
                                    <th class="px-3 py-2 uppercase tracking-tight">
                                        Content
                                    </th>
                                    <th class="px-3 py-2 uppercase tracking-tight">
                                        Date
                                    </th>
                                    <th class="px-3 py-2 uppercase tracking-tight">
                                        Action
                                    </th>
                                    <th class="px-3 py-2 uppercase tracking-tight">
                                        <span class="sr-only">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {testimonials.map((testimonial, index) => (
                                    <tr key={index}>
                                        <td class="px-3 py-2 text-center">
                                            {testimonial.id}
                                        </td>
                                        <td class="px-3 py-2 text-center">
                                            {testimonial.image}
                                        </td>
                                        <td class="px-3 py-2 text-center">
                                            {testimonial.content}
                                        </td>
                                        <td class="px-3 py-2 text-center">
                                            {testimonial.created_at}
                                        </td>
                                        <td class="px-3 py-2 text-center">
                                            <a
                                                href={route(
                                                    "testimonials.edit",
                                                    {
                                                        id: testimonial.id,
                                                    }
                                                )}
                                                className="href"
                                            >
                                                <Button>edit</Button>
                                            </a>
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    forceDelete(testimonial.id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Guest>
        </>
    );
}
