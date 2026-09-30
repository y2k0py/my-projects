import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectCard from "./ProjectCard.jsx";
import {projectsList} from "./projectsList.js";




const ProjectsCarousel = () => {

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            spaceBetween={25}
            slidesPerView={1}
            className="w-full"
        >
            {projectsList.map((project) => (
                <SwiperSlide className="flex! justify-center!">
                    <div className="w-[90%] md:w-[70%] lg:w-[55%]">
                        <ProjectCard
                            title={project.title}
                            image={project.images[0]}
                            shortDescription={project.short_description}
                            linkTo={`/projects/${project.slug}`}

                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ProjectsCarousel;