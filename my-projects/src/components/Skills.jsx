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
    // const [expanded, setExpanded] = useState(false);

    return (
        <div className="relative flex flex-col px-6 py-4 border-b border-red-600">

            <div
                className={`flex flex-col gap-6 overflow-hidden transition-[max-height] duration-500 ${
                    expanded ? "max-h-[2000px]" : "max-h-45"
                }`}
            >
                {skills.map((category) => (
                    <div key={category.title}>
                        <h3 className="mb-2 font-semibold text-red-500">
                            {category.title}:
                        </h3>

                        <div className="flex flex-wrap gap-2">
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
                <div className="pointer-events-none absolute bottom-0 left-0 h-30 w-full bg-linear-to-t from-red-800 to-transparent" />
            )}

            <button
                onClick={() => setExpanded(!expanded)}
                className="relative mt-3 text-sm text-red-500 hover:text-red-400"
            >
                {expanded ? "Show less ↑" : "Show more ↓"}
            </button>

        </div>
    );
};

export default Skills;