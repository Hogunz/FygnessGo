import InputLabel from "@/Components/InputLabel";
import Guest from "@/Layouts/GuestLayout";
import { Button } from "@material-tailwind/react";
import { useForm } from "@inertiajs/react";
export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        image: "",
        content: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);
        post(route("testimonials.store"));
    }

    return (
        <>
            <Guest>
                <div className="py-12 pt-24">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <form onSubmit={handleSubmit}>
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
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                        cols={30}
                                        rows={10}
                                        required
                                    ></textarea>
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
