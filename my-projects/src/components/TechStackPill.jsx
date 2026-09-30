import StackIcon from "tech-stack-icons";

const TechStackPill = ({title, iconName, image}) => {
    let icon = null;
    if (iconName || image){
        icon = (image ? <img src={image} className="size-7 mr-2"  alt={title}/> : <StackIcon name={iconName} className="size-6 mr-2" />);
    }

    return (
        <span className="rounded-full border text-xs border-red-600 px-3 py-2 w-fit text-red-500  text-center flex items-center">
            {icon}
            {title}
        </span>
    )
}
export default TechStackPill;