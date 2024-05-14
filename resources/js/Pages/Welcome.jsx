import CTA from "@/Components/CTA";
import { QuadGallery, TrendingCarousel, Stories } from "@/Components/Gallery";

import Guest from "@/Layouts/GuestLayout";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    listings,
    testimonials,
}) {
    return (
        <>
            <Guest>
                <CTA />
                <section className="container mx-auto">
                    <QuadGallery items={listings} />
                </section>
                <section className="container mx-auto">
                    <TrendingCarousel listings={listings} />
                </section>

                <section className=" container mx-auto ">
                    <div className="flex items-center py-9 md:py-12 lg:py-24">
                        <section
                            className="bg-cover bg-center py-32 w-full rounded-lg"
                            style={{
                                backgroundImage: `linear-gradient(to right, #3f2321, transparent),url(${"/images/banner-2.png"})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className=" z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 max-w-5xl sm:pl-14 flex flex-col sm:justify-start items-start">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-light sm:w-8/12">
                                    Sharing Is Earning Now
                                </h1>
                                <p className="text-base leading-normal text-light mt-4 sm:mt-5 sm:w-5/12">
                                    Great opportunity to make money by
                                    advertising your GYM.
                                </p>
                                <button className="hidden sm:flex  py-4 px-8 text-base font-medium text-white mt-8  w-full rounded border border-[#623AA5] bg-[#623AA5]  hover:bg-[#623AA5]/75 hover:text-light focus:outline-none focus:ring active:text-opacity-75 transition duration-300 ease-in-out sm:w-auto">
                                    Know More
                                </button>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <Stories items={testimonials} />
                </section>
                <section className="flex items-center place-content-center ">
                    <button className=" w-full rounded-3xl border border-[#623AA5] bg-[#623AA5] px-24 py-3 mb-16 text-lg font-semibold tracking-wider text-light hover:bg-transparent hover:text-light focus:outline-none focus:ring active:text-opacity-75 transition duration-300 ease-in-out sm:w-auto">
                        Start your Fitness
                    </button>
                </section>
                <section className="flex flex-col items-center place-content-center ">
                    <div>
                        <p className="text-[28px] font-[500px] text-light dark:text-light mb-6 ">
                            About FYGNESS GO
                        </p>
                    </div>
                    <div>
                        <p className="text-[18px] font-[400px] text-light dark:text-light">
                            Pangasinan's fitness scene is vibrant and diverse.
                            From gyms to outdoor workouts, there's something for
                            everyone. Explore now!
                        </p>
                    </div>
                </section>
            </Guest>
        </>
    );
}
