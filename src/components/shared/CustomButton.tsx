import {cn} from "@/lib/utils.ts";
import {Link} from "react-router-dom";

interface CustomButtonProps {
    title: string;
    className?: string;
    link?: string;
}

const CustomButton = ({title, className,link}:CustomButtonProps) => {
    return (
        <button className={cn("py-6 px-10 rounded-lg text-white text-lg font-bold cursor-pointer", className)}>
            <Link to={link!}>
            {title}
            </Link>
        </button>
    )
}

export default CustomButton
