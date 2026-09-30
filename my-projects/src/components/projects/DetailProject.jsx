import { useParams } from "react-router-dom";
import { projectsList } from "./projectsList.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DetailProject = () => {
    const { slug } = useParams();

    const project = projectsList.find(
        (project) => project.slug === slug
    );

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <h1 className="text-2xl text-red-500">
                    Project not found
                </h1>
            </main>
        );
    }

    return (
        <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-red-500 md:text-5xl">
                    {project.title}
                </h1>

                {project.short_description && (
                    <p className="mx-auto mt-3 max-w-2xl text-gray-400">
                        {project.short_description}
                    </p>
                )}
            </div>

            <section className="mx-auto w-full max-w-4xl">
                <div className="overflow-hidden rounded-2xl border border-red-500/40 bg-red-950/20 shadow-2xl shadow-red-950/30">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={project.images.length > 1}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="
                            w-full
                            [--swiper-navigation-color:#ef4444]
                            [--swiper-pagination-color:#ef4444]
                            [--swiper-navigation-size:24px]
                        "
                    >
                        {project.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex aspect-video w-full items-center justify-center bg-black/20">
                                    <img
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                    Screenshots from the actual project, developed independently
                    or together with one frontend developer.
                </p>
            </section>
        </main>
    );
};

export default DetailProject;