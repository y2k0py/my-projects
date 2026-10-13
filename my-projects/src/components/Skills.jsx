import TechStackPill from "./TechStackPill.jsx";
import fastAPILogo from "../assets/img/tech/fast-api.png";

const skills = [
    {title: "Languages", skills: [
            {title: "Python", iconName: "python"},
            {title: "JavaScript", iconName: "js"},
            {title: "TypeScript", iconName: "typescript"},
        ]},

    {title: "Backend", skills: [
            {title: "Django", iconName: "django"},
            {title: "FastAPI", image: fastAPILogo},
            {title: "Flask", iconName: "flask"},
            {title: "Node.js", iconName: "nodejs"},
            {title: "Alembic"},
            {title: "SQLAlchemy", iconName: "sqlalchemy"},
            {title: "Pydantic"},
        ]
    },
    {title: "Frontend", skills: [
            {title: "React.js", iconName: "react"},
            {title: "Next.js", iconName: "nextjs"},
            {title: "Angular", iconName: "angular"}
        ]
    },
    {title: "Web Automation & Scraping", skills: [
            {title: "Playwright", iconName: "playwright"},
            {title: "Selenium", iconName: "selenium"},
            {title: "curl-cffi"},
            {title: "Antibot bypass"}
        ]
    },

    {title: "Microservices & Distributed Systems", skills: [
            {title: "gRPC"},
            {title: "RabbitMQ",iconName: "rabbitmq"},
            {title: "Redis", iconName: "redis"},
            {title: "Celery"},
        ]
    },
    {title: "Databases", skills: [
            {title: "SQL"},
            {title: "PostgreSQL", iconName: "postgresql"},
            {title: "DynamoDB"},
            {title: "MySQL", iconName: "mysql"},
            {title: "MongoDB", iconName: "mongodb"},
            {title: "Qdrant"},
        ]
    },
    {title: "Amazon Web Services", skills: [
            {title: "EC2", iconName: "ec2"},
            {title: "Lambda"},
            {title: "S3"},
            {title: "SQS"},
            {title: "KMS"},
        ]
    },
    {title: "DevOps & Infrastructure", skills: [
            {title: "Git", iconName: "git"},
            {title: "CloudFlare",iconName: "cloudflare"},
            {title: "Docker", iconName: "docker"},
            {title: "Nginx", iconName: "nginx"},
            {title: "Traefik"},
            {title: "Linux", iconName: "linux"},
        ]
    },
    {title: "AI & LLM Engineering", skills: [
            {title: "LangChain", iconName: "langchain"},
            {title: "LangGraph",iconName: "langgraph"},
            {title: "PyTorch", iconName: "pytorch"}
        ]
    },
    {title: "Telegram Bots & Mini Apps", skills: [
            {title: "Aiogram"},
            {title: "Telethon"}
        ]
    },
    {title: "Monitoring & Observability", skills: [
            {title: "Prometheus", iconName: "prometheus"},
            {title: "Grafana",iconName: "grafana"},
            {title: "ELK"},
            {title: "Datadog", iconName: "datadog"},
            {title: "Loki"},
            {title: "CloudWatch"},
        ]
    },

]

const Skills = ({expanded, setExpanded}) => {

    return (
        <div className="relative flex flex-col px-5 py-4">

            <div
                className={`overflow-hidden transition-[max-height] duration-500 md:columns-2 md:gap-x-12 ${
                    expanded ? "max-h-[3000px]" : "max-h-45 md:max-h-none"
                }`}
            >
                {skills.map((category) => (
                    <div key={category.title} className="mb-8 break-inside-avoid text-left md:text-center">
                        <h3 className="mb-3 text-red-500">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap justify-start gap-2 md:justify-center">
                            {category.skills.map((skill) => (
                                <TechStackPill
                                    key={skill.title}
                                    title={skill.title}
                                    image={skill.image}
                                    iconName={skill.iconName}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {!expanded && (
                <div className="pointer-events-none absolute bottom-0 left-0 h-30 w-full bg-linear-to-t from-red-800 to-transparent md:hidden" />
            )}

            <button
                onClick={() => setExpanded(!expanded)}
                className="relative mt-3 self-center text-sm text-red-500 hover:text-red-400 md:hidden"
            >
                {expanded ? "Show less ↑" : "Show more ↓"}
            </button>

        </div>
    );
};

export default Skills;