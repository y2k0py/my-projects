import {projectsList} from "./projectsList.js";
import ProjectCard from "./ProjectCard.jsx";
import {Link} from "react-router-dom";


const Projects = () => {
    return (
        <main className="justify-center min-h-screen px-5">
            <h1 className="text-3xl text-center font-bold text-red-500 pb-6">My projects</h1>

            <div>
                {projectsList.map((project) => (
                    <div className="mb-3">
                        <Link to={`/projects/${project.slug}`}>
                            <ProjectCard
                                title={project.title}
                                image={project.images[0]}
                                shortDescription={project.short_description}
                                linkTo={`/projects/${project.slug}`}
                            />
                        </Link>
                    </div>
                ))}
            </div>

        </main>
    )
}
export default Projects;