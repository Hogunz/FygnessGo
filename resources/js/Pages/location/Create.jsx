import InputLabel from "@/Components/InputLabel";
import { Button } from "@material-tailwind/react";
import Guest from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        location: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);
        post(route("locations.store"));
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
                                        onChange={(e) =>
                                            setData("location", e.target.value)
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
