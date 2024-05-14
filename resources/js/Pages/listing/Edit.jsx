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
                                    <InputLabel>Name</InputLabel>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    ></input>
                                </div>
                                <div className="mb-2">
                                    <InputLabel>Main Image</InputLabel>
                                    <input
                                        type="file"
                                        accepts="images/*"
                                        name="main_image"
                                        onChange={(e) =>
                                            setData(
                                                "main_image",
                                                e.target.files[0]
                                            )
                                        }
                                        required
                                    ></input>
                                </div>
                                <div className="mb-2">
                                    <InputLabel>Vertical Image</InputLabel>
                                    <input
                                        type="file"
                                        accepts="images/*"
                                        name="vertical_image"
                                        onChange={(e) =>
                                            setData(
                                                "vertical_image",
                                                e.target.files[0]
                                            )
                                        }
                                        required
                                    ></input>
                                </div>
                                <div className="mb-2">
                                    <InputLabel>Description</InputLabel>
                                    <input
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    ></input>
                                </div>
                                <div className="mb-2">
                                    <InputLabel>Inclusions</InputLabel>
                                    <textarea
                                        type="text"
                                        name="inclusions"
                                        value={data.inclusions}
                                        onChange={(e) =>
                                            setData(
                                                "inclusions",
                                                e.target.value
                                            )
                                        }
                                        cols={30}
                                        rows={10}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-2">
                                    <InputLabel>Location</InputLabel>
                                    <textarea
                                        type="text"
                                        name="location"
                                        value={data.inclusions}
                                        onChange={(e) =>
                                            setData("location", e.target.value)
                                        }
                                        cols={30}
                                        rows={10}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-2">
                                    <InputLabel>Price</InputLabel>
                                    <TextInput
                                        type="number"
                                        name="price"
                                        value={data.inclusions}
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                        cols={30}
                                        rows={10}
                                        required
                                    ></TextInput>
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
