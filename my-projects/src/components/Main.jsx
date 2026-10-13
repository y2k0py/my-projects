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


            <section className="flex w-full flex-col">
                <p className="mx-auto mt-5 max-w-4xl px-5 text-left text-red-500 animate-[fadeIn_0.6s_ease-out]">
                    Hi, I'm a software engineer with a passion for building scalable and efficient systems. I specialize in developing web applications using React, Node.js and Python, and I'm always looking for new challenges to take on.
                </p>

                <div className="mt-5 flex h-px w-full bg-red-500 animate-[fadeIn_0.7s_ease-out]" />

                <div className="mx-auto w-full">
                    <h2 className="mt-5 mb-5 px-5 text-center text-3xl text-red-500 animate-[fadeIn_0.8s_ease-out]">Highlighted projects</h2>
                    <ProjectsCarousel />
                </div>
            </section>

            <section className="mt-10 h-fit w-full bg-red-950">
                <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-5 pt-5 md:justify-center">
                    <h2 className="text-3xl text-red-500 animate-[fadeIn_0.8s_ease-out]">
                        My Tech Stack
                    </h2>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-end text-end md:hidden"
                    >
                        {expanded ? (
                            <Minus className="size-7 text-red-500" />
                        ) : (
                            <Plus className="size-7 text-red-500" />
                        )}
                    </button>
                </div>

                <div className="mx-auto w-full max-w-4xl">
                    <Skills expanded={expanded} setExpanded={setExpanded} />
                </div>
            </section>
        </main>
    )
}

export default Main;