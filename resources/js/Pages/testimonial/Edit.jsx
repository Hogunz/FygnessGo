import InputLabel from "@/Components/InputLabel";
import { NavBar } from "@/Components/NavBar";
import { Button } from "@material-tailwind/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Edit({ testimonial }) {
    const { data, setData, post, errors } = useForm({
        name: testimonial.name,
        position: testimonial.position,
        image: "",
        content: testimonial.content,
    });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);

        post(route("testimonials.update", testimonial.id));
    }

    return (
        <>
            <NavBar />
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
                                <InputLabel>Image</InputLabel>
                                <input
                                    type="file"
                                    accepts="images/*"
                                    name="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                    required
                                ></input>
                            </div>
                            <div className="mb-2">
                                <InputLabel>Content</InputLabel>
                                <textarea
                                    name="content"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
                                    cols={30}
                                    rows={10}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-2">
                                <Button type="submit">Update</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
