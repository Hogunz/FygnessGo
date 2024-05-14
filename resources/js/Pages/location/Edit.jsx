import InputLabel from "@/Components/InputLabel";
import { Button } from "@material-tailwind/react";
import { useForm } from "@inertiajs/react";

import Guest from "@/Layouts/GuestLayout";
import TextInput from "@/Components/TextInput";
export default function Edit({ listing }) {
    const { data, setData, post, errors } = useForm({
        name: listing.name,
        description: listing.description,
        main_image: "", // Corrected
        vertical_image: "", // Corrected
        inclusions: listing.inclusions,
        location: listing.location,
        price: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);

        post(route("listings.update", listing.id));
    }

    return (
        <>
            <Guest>
                <div className="py-12 pt-24">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <InputLabel>Location</InputLabel>
                                    <input
                                        type="text"
                                        name="location"
                                        value={data.location}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    ></input>
                                </div>
                                <div className="mb-2">
                                    <Button type="submit">Update</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
}
