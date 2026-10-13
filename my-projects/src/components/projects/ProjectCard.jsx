import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import {Link} from "react-router-dom";
import CountryLabel from "./CountryLabel.jsx";

const ProjectCard = ({ title, image, shortDescription, company, country, linkTo }) => {
    const card = (
        <div className="flex h-full flex-col rounded-3xl border border-red-900/70 bg-linear-to-bl from-red-950 to-gray-950 p-4 shadow-md transition-colors duration-300 hover:border-red-600">
            <img src={image} alt={title} className="aspect-[4/3] w-full rounded-lg border border-gray-50/30 object-cover object-top shadow" />
            <div className="flex flex-1 flex-col items-center text-center text-red-500">
                <h2 className="mt-4 text-xl">{title}</h2>
                {(company || country) && (
                    <p className="mt-1 flex flex-wrap items-center justify-center gap-x-1.5 text-xs text-red-300/70">
                        {company && <span>{company}</span>}
                        {company && country && <span aria-hidden="true">·</span>}
                        <CountryLabel country={country} />
                    </p>
                )}
                <p className="mt-2 text-xs">{shortDescription}</p>

                {linkTo &&
                    <span className="mt-auto pt-4">
                        <span className="flex h-8 w-fit items-center gap-2 rounded-3xl bg-red-900 pl-3 pr-3 transition-colors duration-300 group-hover:bg-red-800">
                            <span>Open</span>
                            <ArrowUpRightIcon className="size-4" />
                        </span>
                    </span>
                }
            </div>
        </div>
    );

    if (!linkTo) {
        return card;
    }

    return (
        <Link to={linkTo} className="group block h-full">
            {card}
        </Link>
    );
}
export default ProjectCard;