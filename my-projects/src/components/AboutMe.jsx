const points = [
    {
        title: "What I build",
        text: "Experienced in designing scalable backend systems, REST APIs, microservices, cloud infrastructure, and responsive frontend applications.",
    },
    {
        title: "In production",
        text: "Built and scaled bidauto.online to 15,000+ users and ~5M requests/week, while developing automation systems processing 20,000+ operations/day and reducing processing time from 5+ minutes to ≤40 seconds.",
    },
    {
        title: "What I focus on",
        text: "Focused on backend engineering, automation, distributed systems, and AI agents, with experience solving performance, reliability, and scalability problems in production environments.",
    },
];

const AboutMe = () => {
    return (
        <main className="mt-5 flex flex-col">
            <h1 className="px-5 text-center text-3xl font-bold text-red-500">About me</h1>

            <p className="mx-auto mt-5 max-w-3xl px-5 text-left text-red-500 md:text-center">
                Full-Stack Developer with 3+ years of experience building production web applications with Python, FastAPI, Django, React, JavaScript, and TypeScript.
            </p>

            <div className="mt-8 h-px w-full bg-red-500" />

            <section className="w-full bg-red-950">
                <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-8">
                    {points.map((point) => (
                        <div key={point.title} className="text-left md:text-center">
                            <h2 className="text-red-500">{point.title}</h2>
                            <p className="mt-2 text-red-500">{point.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
export default AboutMe;
