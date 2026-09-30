import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import {Link} from "react-router-dom";

const ProjectCard = ({ title, image, shortDescription, linkTo }) => {
    return (
        <div className="rounded-3xl bg-linear-to-bl from-red-950 to-gray-950 p-4 shadow-md border border-red-900/70 sm:w-125 lg:w-135">
            <img src={image} alt={title} className="w-full h-full object-cover shadow rounded-lg border border-gray-50/30" />
            <div className="flex flex-col text-center justify-start text-red-500">
                <h1 className="mt-4 text-xl">{title}</h1>
                <p className="text-xs mt-2">{shortDescription}</p>

                {linkTo &&
                    <Link className="bg-red-900 w-fit rounded-3xl pl-3 pr-3 h-8  mt-2 flex items-center gap-2 underline" to={linkTo}>
                        <span>Open</span>
                        <ArrowUpRightIcon className="size-4" />
                    </Link>
                }

            </div>
        </div>
    );
}
export default ProjectCard;