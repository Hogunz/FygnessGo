import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Star from "./Star";

export const QuadGallery = ({ items }) => {
    return (
        <>
            <div className="font-[500px] text-[42px] pt-[28px] pb-[18px] text-light font-Quicksand mx-auto container">
                Exclusives
            </div>
            <div className="grid grid-cols-4 gap-2 mx-auto container">
                {items.map((item, index) => (
                    <div key={index}>
                        <div className="mb-4">
                            <img
                                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                                src={`/storage/` + item.main_image}
                                alt="haha"
                            />
                        </div>
                        <div className="flex-col text-light">
                            <Star />
                            <div className="">{item.description}</div>
                            <div>
                                Starts:{" "}
                                <span className="text-[28px] font-bold">
                                    {"₱" + item.price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export const TrendingCarousel = ({ listings }) => {
    return (
        <>
            <div className="font-[500px] text-[42px] pt-[28px] pb-[18px] text-light font-Quicksand mx-auto container">
                Trending GYM Places
            </div>
            <div className="mt-8 mb-8 mx-auto container">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {listings.map((p, index) => (
                        <SwiperSlide key={index}>
                            <a href="">
                                <div className="flex flex-col">
                                    <div className="mb-8">
                                        <img
                                            className="w-[750px] h-[580px] object-cover rounded-lg"
                                            src={`storage/` + p.vertical_image}
                                        />
                                    </div>
                                    <div className="text-[16px] leading-[24px] font-[300px] text-light font-brandon">
                                        {p.location.location}
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export const Stories = ({ items = [] }) => {
    return (
        <>
            <div className="font-[500px] text-[42px] pb-[18px] text-light font-Quicksand mx-auto container">
                GYM GOERS Stories
            </div>
            <div className="mt-8 mb-8 mx-auto container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {items.map((p, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center ">
                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                    <div className="mb-8">
                                        <img
                                            className="transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 w-[525.53px] h-[788.39px] object-cover rounded-lg"
                                            src={`storage/` + p.image}
                                            alt="haha"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            {p.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <a href="/categories">
                                <div className="flex flex-col">
                                    <div className="mb-8">
                                        <img
                                            className="w-[525.53px] h-[788.39px] object-cover rounded-lg"
                                            src={p.image}
                                        />
                                    </div>
                                </div>
                            </a> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
