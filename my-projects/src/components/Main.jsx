import BrutText from "./BrutText.jsx";
import { Plus, Minus } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import Skills from "./Skills.jsx";
import {useState} from "react";
import ProjectsCarousel from "./projects/ProjectsCarousel.jsx";



const Main = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <main className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-5xl text-red-500 animate-[fadeIn_0.4s_ease-out]">
                <BrutText>
                    Welcome!
                </BrutText>
            </h1>


            <section className="flex flex-col w-full">
                <p className="text-red-500 text-1xl text-left px-5 mt-5 animate-[fadeIn_0.6s_ease-out]">
                    Hi, I'm a software engineer with a passion for building scalable and efficient systems. I specialize in developing web applications using React, Node.js and Python, and I'm always looking for new challenges to take on.
                </p>

                <div className="mt-5 flex h-px w-full bg-red-500 animate-[fadeIn_0.7s_ease-out]" />

                <h2 className="text-3xl text-red-500 animate-[fadeIn_0.8s_ease-out] px-6 mt-5 mb-5">My Projects</h2>
                <ProjectsCarousel />
            </section>

            <section className="mt-10 h-fit w-full bg-red-950">
                <div className="flex items-center justify-between pl-6 pt-5">
                    <h2 className="text-3xl text-red-500 animate-[fadeIn_0.8s_ease-out]">
                        My Tech Stack
                    </h2>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mr-6 items-end flex text-end"
                    >
                        {expanded ? (
                            <Minus className="size-7 text-red-500" />
                        ) : (
                            <Plus className="size-7 text-red-500" />
                        )}
                    </button>
                </div>

                <Skills expanded={expanded} setExpanded={setExpanded} />
            </section>
        </main>
    )
}

export default Main;