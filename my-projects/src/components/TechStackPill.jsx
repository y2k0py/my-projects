import StackIcon from "tech-stack-icons";

const TechStackPill = ({title, iconName, image}) => {
    let icon = null;
    if (iconName || image){
        icon = (image ? <img src={image} className="size-5 shrink-0" alt="" aria-hidden="true"/> : <StackIcon name={iconName} className="size-5 shrink-0" aria-hidden="true" />);
    }

    return (
        <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-red-700/70 bg-black/10 px-3 py-2 text-xs leading-tight text-red-200">
            {icon}
            {title}
        </span>
    )
}
export default TechStackPill;