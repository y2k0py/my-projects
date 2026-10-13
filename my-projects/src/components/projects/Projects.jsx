import {projectsList} from "./projectsList.js";
import ProjectCard from "./ProjectCard.jsx";


const Projects = () => {
    return (
        <main className="px-5 pb-4">
            <h1 className="pb-6 text-center text-3xl font-bold text-red-500">Projects</h1>

            <div className="mx-auto flex flex-wrap justify-center gap-4">
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
        </main>
    )
}
export default Projects;