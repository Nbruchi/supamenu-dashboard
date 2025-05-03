import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

interface LogoProps {
    black?: boolean;
    className?: string;
}

const Logo = ({black,className}: LogoProps) => {
    return (
        <Link to="/">
            <h1 className={cn(
                "text-7xl font-bold",
                black ? "text-black" : "text-white", className)}
            >Supa
                <span className={cn(black ? "text-white": "text-orange-400")}>
                    Menu
                </span>
            </h1>
        </Link>
    )
}
export default Logo
