import InputLabel from "@/Components/InputLabel";
import { Button } from "@material-tailwind/react";
import Guest from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
export default function Create({ locations }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        main_image: "",
        vertical_image: "",
        inclusions: "",
        location_id: "",
        price: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);
        post(route("listings.store"));
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
                                        accept="images/*"
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
                                        accept="images/*"
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
                                    <input
                                        type="text"
                                        name="inclusions"
                                        onChange={(e) =>
                                            setData(
                                                "inclusions",
                                                e.target.value
                                            )
                                        }
                                        required
                                    ></input>
                                </div>
                                {/* <div className="mb-2">
                                    <InputLabel>Location</InputLabel>
                                    <input
                                        type="text"
                                        name="location"
                                        onChange={(e) =>
                                            setData("location", e.target.value)
                                        }
                                        required
                                    ></input>
                                </div> */}
                                <div className="mb-2">
                                    <InputLabel>Location</InputLabel>
                                    <select
                                        name="location_id"
                                        onChange={(e) =>
                                            setData(
                                                "location_id",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="">
                                            Select Location
                                        </option>
                                        {locations.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.location}
                                            </option>
                                        ))}
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <InputLabel>Price</InputLabel>
                                    <input
                                        type="text"
                                        name="price"
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                        required
                                    ></input>
                                </div>
                                <div className="mb-2">
                                    <Button type="submit">Create</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
}
