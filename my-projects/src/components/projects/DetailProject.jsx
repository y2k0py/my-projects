import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { X } from "lucide-react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { projectsList } from "./projectsList.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Keyboard, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import TechStackPill from "../TechStackPill.jsx";
import CountryLabel from "./CountryLabel.jsx";

const DetailProject = () => {
    const { slug } = useParams();
    const [fullscreenIndex, setFullscreenIndex] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [fullscreenSwiper, setFullscreenSwiper] = useState(null);

    const project = projectsList.find(
        (project) => project.slug === slug
    );

    const handleCloseFullscreen = useCallback(() => {
        if (isClosing) return;
        setIsClosing(true);
        setTimeout(() => {
            setFullscreenIndex(null);
            setIsClosing(false);
        }, 200);
    }, [isClosing]);

    const handleFullscreenBackdropClick = (e) => {
        if (
            e.target.closest("button") ||
            e.target.closest(".swiper-button-prev") ||
            e.target.closest(".swiper-button-next") ||
            e.target.closest(".swiper-pagination") ||
            e.target.closest("img")
        ) {
            return;
        }
        handleCloseFullscreen();
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                handleCloseFullscreen();
            }
        };

        if (fullscreenIndex !== null) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [fullscreenIndex, handleCloseFullscreen]);

    if (!project) {
        return (
            <main className="flex min-h-[40vh] items-center justify-center px-5">
                <h1 className="text-2xl text-red-500">
                    Project not found
                </h1>
            </main>
        );
    }

    return (
        <main className="mt-5 flex w-full flex-col">
            <h1 className="px-5 text-center text-3xl font-bold text-red-500">
                {project.title}
            </h1>

            {project.short_description && (
                <p className="mx-auto mt-5 max-w-4xl px-5 text-center text-red-500">
                    {project.short_description}
                </p>
            )}
            {(project.company || project.role || project.country) && (
                <p className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 px-5 text-xs text-red-300/70">
                    {project.role && <span>{project.role}</span>}
                    {project.role && (project.company || project.country) && <span aria-hidden="true">·</span>}
                    {project.company && <span>{project.company}</span>}
                    {project.company && project.country && <span aria-hidden="true">·</span>}
                    <CountryLabel country={project.country} />
                </p>
            )}
            {project.website_url && (
                <a
                    href={project.website_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto mt-4 flex h-8 w-fit items-center gap-2 rounded-3xl bg-red-900 px-3 text-red-500 transition-colors duration-300 hover:bg-red-800"
                >
                    <span>Visit website</span>
                    <ArrowUpRightIcon className="size-4" />
                </a>
            )}

            <div className="mt-5 h-px w-full bg-red-500" />

            <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
                <section aria-label={`${project.title} screenshots`} className="min-w-0">
                    <div className="rounded-3xl border border-red-900/70 bg-linear-to-bl from-red-950 to-gray-950 p-4 shadow-md">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={project.images.length > 1}
                            autoHeight
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
                                <SwiperSlide key={index} className="!h-auto">
                                    <img
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        onClick={() => {
                                            setFullscreenIndex(index);
                                            setActiveSlide(index);
                                        }}
                                        className="block h-auto w-full cursor-zoom-in rounded-lg border border-gray-50/30 shadow"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <p className="mt-3 text-center text-xs text-gray-500">
                            Screenshots from the actual project
                        </p>
                    </div>
                </section>

                <section className="min-w-0 text-red-500">
                    <h2 className="text-3xl">About this project</h2>
                    {project.results?.length > 0 && (
                        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {project.results.map((result) => (
                                <li
                                    key={result.label}
                                    className="rounded-2xl border border-red-800/70 bg-red-950/80 px-3 py-2"
                                >
                                    <p className="text-lg leading-tight text-red-500">{result.value}</p>
                                    <p className="mt-1 text-xs leading-snug text-red-300">{result.label}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                    {project.highlights?.length > 0 && (
                        <ul className="mt-4 flex flex-col gap-2">
                            {project.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="flex gap-3 rounded-2xl border border-red-800/70 bg-red-950/80 px-3 py-2 text-sm leading-snug text-red-300"
                                >
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p className="mt-3 text-red-500">{project.description}</p>

                    <div className="mt-5 h-px w-full bg-red-500" />

                    <h2 className="mt-5 text-3xl">Technologies used</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                            <TechStackPill
                                key={skill.title}
                                title={skill.title}
                                image={skill.image}
                                iconName={skill.iconName}
                            />
                        ))}
                    </div>
                </section>
            </div>

            {fullscreenIndex !== null && (
                <div
                    className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/30 p-4 backdrop-blur-md md:p-6 ${
                        isClosing ? "animate-fullscreen-fade-out" : "animate-fullscreen-fade"
                    }`}
                    onClick={handleFullscreenBackdropClick}
                >
                    <button
                        type="button"
                        onClick={handleCloseFullscreen}
                        className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-2 text-white/80 transition-colors hover:bg-black/90 hover:text-white"
                        aria-label="Close fullscreen preview"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div
                        className={`relative flex flex-1 min-h-0 w-full max-w-6xl items-center justify-center ${
                            isClosing ? "animate-fullscreen-zoom-out" : "animate-fullscreen-zoom"
                        }`}
                    >
                        <Swiper
                            modules={[Navigation, Pagination, Keyboard, Zoom]}
                            zoom={{ maxRatio: 2, toggle: true }}
                            initialSlide={fullscreenIndex}
                            onSwiper={(swiper) => {
                                setFullscreenSwiper(swiper);
                                setActiveSlide(swiper.realIndex);
                            }}
                            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                            navigation
                            pagination={{ clickable: true }}
                            keyboard={{ enabled: true }}
                            loop={project.images.length > 1}
                            spaceBetween={30}
                            slidesPerView={1}
                            className="
                                h-full w-full
                                [--swiper-navigation-color:#ef4444]
                                [--swiper-pagination-color:#ef4444]
                                [--swiper-navigation-size:32px]
                            "
                        >
                            {project.images.map((image, index) => (
                                <SwiperSlide key={index} zoom={true}>
                                    <img
                                        src={image}
                                        alt={`${project.title} fullscreen screenshot ${index + 1}`}
                                        className="max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl select-none"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Preview of all images at the bottom */}
                    <div
                        className={`mt-4 flex w-full max-w-4xl items-center justify-center gap-2 overflow-x-auto py-2 px-4 ${
                            isClosing ? "animate-fullscreen-slide-down" : "animate-fullscreen-slide-up"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {project.images.map((image, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => {
                                    setActiveSlide(index);
                                    if (fullscreenSwiper) {
                                        if (fullscreenSwiper.params?.loop) {
                                            fullscreenSwiper.slideToLoop(index);
                                        } else {
                                            fullscreenSwiper.slideTo(index);
                                        }
                                    }
                                }}
                                className={`relative shrink-0 overflow-hidden rounded-lg transition-all duration-200 cursor-pointer ${
                                    activeSlide === index
                                        ? "border-2 border-red-500 ring-2 ring-red-500/50 scale-105 opacity-100"
                                        : "border-2 border-transparent opacity-50 hover:opacity-80 hover:scale-100"
                                }`}
                                aria-label={`Go to screenshot ${index + 1}`}
                            >
                                <img
                                    src={image}
                                    alt={`Screenshot preview ${index + 1}`}
                                    className="h-14 w-20 md:h-16 md:w-24 object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
};

export default DetailProject;