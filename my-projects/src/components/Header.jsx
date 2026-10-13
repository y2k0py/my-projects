import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import profileImage from "../assets/img/profileimage.jpg"


const tabs = [
    { name: "Main", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
];

const Header = () => {
    const location = useLocation();

    return (
        <header className="w-full">

            {/* Navigation */}
            <nav className="flex justify-center pt-6">
                <div className="flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/80 px-3 py-3 backdrop-blur-lg">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className={`rounded-3xl px-4 py-2 transition-all duration-300 ${
                                location.pathname === tab.path || (tab.path !== "/" && location.pathname.startsWith(tab.path))
                                    ? "border border-red-600 bg-red-950 text-red-500"
                                    : "border border-red-900/50 text-red-800 hover:bg-red-950/70 hover:text-red-500"
                            }`}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Profile image */}
            <div className="mt-6 flex flex-col items-center justify-center">
                <div className="size-24 rounded-full border-2 border-red-600 bg-red-950 p-1 shadow-lg shadow-red-950/50">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="size-full rounded-full object-cover"
                    />
                </div>
                <div className="text-red-500 font-mono mt-4">
                    <span>
                        abudaba
                    </span>
                    <span className="animate-[blink_1s_steps(1)_infinite]">
                        _
                    </span>

                </div>
            </div>



            {/* Social links */}
            {/*<div className="right-6 top-5 flex items-center gap-3">*/}
            {/*    <a*/}
            {/*        href="#"*/}
            {/*        className="rounded-full p-2 text-red-500 transition-all duration-300 hover:bg-red-950 hover:text-red-400"*/}
            {/*    >*/}
            {/*        <FaInstagram className="size-6" />*/}
            {/*    </a>*/}

            {/*    <a*/}
            {/*        href="#"*/}
            {/*        className="rounded-full p-2 text-red-500 transition-all duration-300 hover:bg-red-950 hover:text-red-400"*/}
            {/*    >*/}
            {/*        <FaGithub className="size-6" />*/}
            {/*    </a>*/}

            {/*    <a*/}
            {/*        href="#"*/}
            {/*        className="rounded-full p-2 text-red-500 transition-all duration-300 hover:bg-red-950 hover:text-red-400"*/}
            {/*    >*/}
            {/*        <FaLinkedin className="size-6" />*/}
            {/*    </a>*/}

            {/*    <a*/}
            {/*        href="#"*/}
            {/*        className="rounded-full p-2 text-red-500 transition-all duration-300 hover:bg-red-950 hover:text-red-400"*/}
            {/*    >*/}
            {/*        <FaYoutube className="size-6" />*/}
            {/*    </a>*/}
            {/*</div>*/}
        </header>
    );
};

export default Header;