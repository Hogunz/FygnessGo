import React from "react";
import Guest from "@/Layouts/GuestLayout";
import Star from "@/Components/Star";

export default function FindAGym({ listings }) {
    return (
        <>
            <Guest>
                <div className="flex flex-col container mx-auto mt-20">
                    <div className="text-dark dark:text-light">
                        <p>200+ Options</p>
                        <p className="tracking-wide font-bold text-[18px] font-poppins ">
                            Recommended Places In Pangasinan
                        </p>
                    </div>
                </div>
                <div className="lg:container lg:mx-auto lg:pt-8 pt-4 w-full grid grid-cols-3 gap-4">
                    <div className="text-dark dark:text-light divide-y-2 border-t col-span-2">
                        {listings.map((p, index) => (
                            <div key={index} className="flex gap-4 py-10">
                                <img
                                    className="rounded-lg max-w-lg h-80 w-full object-cover"
                                    src={`storage/` + p.main_image}
                                    alt=""
                                />

                                <div className="text-dark dark:text-light flex flex-col ">
                                    <div className="text-[18px] text-dark dark:text-light ">
                                        {p.description}
                                    </div>
                                    <div className="text-[22px] font-semibold text-[#623AA5] ">
                                        {p.name}
                                    </div>
                                    <div className="text-[18px] text-dark dark:text-light ">
                                        {p.inclusions}
                                    </div>
                                    <div className="text-[18px] text-dark dark:text-light ">
                                        <Star />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-dark dark:text-light">2</div>
                </div>
            </Guest>
        </>
    );
}
