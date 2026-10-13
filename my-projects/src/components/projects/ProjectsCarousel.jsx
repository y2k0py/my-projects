import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectCard from "./ProjectCard.jsx";
import {projectsList} from "./projectsList.js";




const ProjectsCarousel = () => {
    return (
        <>
            <div className="mx-auto hidden w-full flex-wrap justify-center gap-4 px-5 md:flex">
                {projectsList.map((project) => (
                    <div key={project.slug} className="w-[min(100%,28rem)] shrink-0">
                        <ProjectCard
                            title={project.title}
                            image={project.images[0]}
                            shortDescription={project.short_description}
                            company={project.company}
                            country={project.country}
                            linkTo={`/projects/${project.slug}`}
                        />
                    </div>
                ))}
            </div>

            <div className="md:hidden">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={25}
                slidesPerView={1}
                className="mt-4 w-full"
            >
                {projectsList.map((project) => (
                    <SwiperSlide key={project.slug} className="flex! justify-center!">
                        <div className="w-full px-5">
                            <ProjectCard
                                title={project.title}
                                image={project.images[0]}
                                shortDescription={project.short_description}
                                company={project.company}
                                country={project.country}
                                linkTo={`/projects/${project.slug}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </>
    )
}

export default ProjectsCarousel;