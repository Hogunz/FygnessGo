import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";

import { Button } from "@material-tailwind/react";
export default function Index({ locations }) {
    const { delete: destroy } = useForm({});
    function forceDelete(id) {
        destroy(route("locations.forceDelete", id));
    }
    return (
        <>
            <Guest>
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg pt-24">
                    <div className="border-b border-gray-200 bg-white p-6">
                        <div className="mb-2 flex justify-end">
                            <a
                                href={route("locations.create")}
                                className="href"
                            >
                                <Button>Create</Button>
                            </a>
                        </div>
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th className="px-3 py-2 uppercase tracking-tight">
                                        ID
                                    </th>

                                    <th className="px-3 py-2 uppercase tracking-tight">
                                        Location
                                    </th>

                                    <th className="px-3 py-2 uppercase tracking-tight">
                                        Date
                                    </th>
                                    <th className="px-3 py-2 uppercase tracking-tight">
                                        Action
                                    </th>
                                    <th className="px-3 py-2 uppercase tracking-tight">
                                        <span className="sr-only">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {locations.map((location, index) => (
                                    <tr key={index}>
                                        <td className="px-3 py-2 text-center">
                                            {location.id}
                                        </td>
                                        <td className="px-3 py-2 text-center">
                                            {location.location}
                                        </td>
                                        <td className="px-3 py-2 text-center">
                                            {location.created_at}
                                        </td>
                                        <td className="px-3 py-2 text-center">
                                            <a
                                                href={route("locations.edit", {
                                                    id: location.id,
                                                })}
                                                className="href"
                                            >
                                                <Button>edit</Button>
                                            </a>
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    forceDelete(location.id)
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
