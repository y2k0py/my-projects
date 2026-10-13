import { Mail } from "lucide-react";
import instagram from "../assets/img/socialMedia/instagram.svg"
import linkedin from "../assets/img/socialMedia/linkedin.svg"
import telegram from "../assets/img/socialMedia/telegram.svg"

const socialMedia = [
    {
        platformName: "LinkedIn",
        link: "https://www.linkedin.com/in/ivan-petrovskiy-29a97524b/",
        image: linkedin,
    },
    {
        platformName: "Instagram",
        link: "https://www.instagram.com/4budaba/",
        image: instagram,
    },
    {
        platformName: "Telegram",
        link: "https://t.me/abudab4",
        image: telegram,
    }
]

const Footer = () => (
    <footer className="mt-auto pt-10">
        <div className="h-px w-full bg-red-900" />
        <div className="flex flex-col items-center gap-5 px-5 py-10 text-center">
            <h2 className="text-3xl text-red-500">Let’s connect</h2>

            <div className="flex flex-wrap items-center justify-center gap-2">
                <nav aria-label="Social media" className="flex flex-wrap justify-center gap-2">
                    {socialMedia.map((social) => (
                        <a
                            key={social.platformName}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-8 items-center gap-2 rounded-3xl border border-red-900/50 px-4 text-red-500 transition-all duration-300 hover:bg-red-950/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                        >
                            <img
                                src={social.image}
                                alt=""
                                aria-hidden="true"
                                className="size-4 brightness-0 invert"
                            />
                            {social.platformName}
                        </a>
                    ))}
                </nav>
                <a
                    href="mailto:peyrovskaaa@gmail.com"
                    className="inline-flex h-8 items-center gap-2 rounded-3xl border border-red-900/50 px-4 text-red-500 transition-all duration-300 hover:bg-red-950/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                    <Mail className="size-4" aria-hidden="true" />
                    peyrovskaaa@gmail.com
                </a>
            </div>

            <p className="text-xs text-red-500">© {new Date().getFullYear()} abudaba</p>
        </div>
    </footer>
)

export default Footer
