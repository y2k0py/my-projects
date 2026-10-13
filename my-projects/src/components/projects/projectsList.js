import bidautoProject from "../../assets/img/projects/bidauto-image.jpeg";
import bidmaxProject from "../../assets/img/projects/bidmax.png";
import vinasProject from "../../assets/img/projects/vinas.png";

const projectsList = [
    {
        title: "vinas.lt",
        company: "Vinas LLC",
        country: "Lithuania",
        role: "Fullstack Developer",
        images: [vinasProject],
        short_description: "A car-auction platform built from the ground up for searching, bidding, and customer workflows. I still support it and step in when something goes wrong.",
        description: "Built vinas.lt from scratch, delivering the backend architecture and frontend application for auction and customer workflows. The platform helps customers search U.S. vehicle auctions and manage the process of buying and shipping a car. I still support the project and help when something goes wrong.",
        highlights: [
            "Built the backend and the React app from scratch",
            "Shipped search, bidding, and customer workflows",
            "Customers can find a U.S. auction car and manage buying and shipping",
        ],
        skills: [
            { title: "React" },
            { title: "Python" },
            { title: "FastAPI" },
            { title: "AWS" },
            { title: "Auction workflows" },
            { title: "Git", iconName: "git" },
            { title: "CloudFlare", iconName: "cloudflare" },
            { title: "Docker", iconName: "docker" },
            { title: "Nginx", iconName: "nginx" },
            { title: "Traefik" },
            { title: "Linux", iconName: "linux" },
        ],
        website_url: "https://vinas.lt",
        slug: "vinas"
    },
    {
        title: "bidmax.eu",
        company: "Autofolwark LLC",
        country: "Poland",
        role: "Fullstack Developer",
        images: [bidmaxProject],
        short_description: "An auction-platform MVP adapted and launched in one month. I still support it and step in when something goes wrong.",
        description: "Delivered the bidmax.eu MVP in one month by extending an existing auction platform and adapting it to a new product. Improved the auction AI agent's lot-selection reliability to reduce missed and unstable results, automated customer and internal deal-processing workflows, and deployed production services on AWS EC2 and Lambda with automated database backups and role-based access control. I still support the project and help when something goes wrong.",
        highlights: [
            "Shipped the MVP in one month from an existing auction platform",
            "Made the AI agent's lot selection more reliable",
            "Automated deal processing and deployed production on AWS with backups and role-based access",
        ],
        skills: [
            { title: "React" },
            { title: "Python" },
            { title: "AI agents" },
            { title: "AWS EC2" },
            { title: "AWS Lambda" },
            { title: "Role-based access control" },
            { title: "Git", iconName: "git" },
            { title: "CloudFlare", iconName: "cloudflare" },
            { title: "Docker", iconName: "docker" },
            { title: "Nginx", iconName: "nginx" },
            { title: "Traefik" },
            { title: "Linux", iconName: "linux" },
        ],
        website_url: "https://bidmax.eu",
        slug: "bidmax"
    },
    {
        title: "bidauto.online",
        company: "T-AutoLogistics LLC",
        country: "Lithuania",
        role: "Fullstack Developer",
        images: [bidautoProject],
        short_description: "A vehicle-auction platform scaled to 15,000+ users and around 5M requests per week.",
        description: "Developed and scaled bidauto.online across the React frontend and Python backend, supporting more than 15,000 users and around 5 million requests per week while migrating the backend from Django to a distributed FastAPI architecture. Built an AI auction-search agent with LangChain and LangGraph that saved the client approximately four hours of manual work per day, and integrated Copart and IAAI APIs to automate listing synchronization. Implemented JWT/OAuth2 authentication and role-based access control, then introduced Docker-based deployment and GitHub Actions CI/CD to reduce releases from hours to minutes.",
        highlights: [
            "Scaled it to 15,000+ users and about 5M requests a week",
            "Migrated the backend from Django to distributed FastAPI",
            "Built an AI search agent that saved about 4 hours of manual work a day",
            "Cut releases from hours to minutes with Docker and GitHub Actions",
        ],
        results: [
            { value: "15,000+", label: "users" },
            { value: "~5M", label: "requests a week" },
            { value: "~4 hours", label: "saved per day" },
            { value: "Hours to minutes", label: "release time" },
            { value: "20,000+", label: "operations a day" },
            { value: "≤40 sec", label: "down from 5+ minutes" },
        ],
        skills: [
            { title: "React" },
            { title: "Python" },
            { title: "Django" },
            { title: "FastAPI" },
            { title: "LangChain" },
            { title: "LangGraph" },
            { title: "Copart and IAAI APIs" },
            { title: "Git", iconName: "git" },
            { title: "CloudFlare", iconName: "cloudflare" },
            { title: "Docker", iconName: "docker" },
            { title: "Nginx", iconName: "nginx" },
            { title: "Traefik" },
            { title: "Linux", iconName: "linux" },
            { title: "GitHub Actions" },
            { title: "JWT/OAuth2" },
        ],
        website_url: "https://bidauto.online",
        slug: "bidauto"
    }
];

export { projectsList };
