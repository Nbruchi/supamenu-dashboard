import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

interface LogoProps {
    black?: boolean;
}

const Logo = ({black}: LogoProps) => {
    return (
        <Link to="/">
            <h1 className={cn("text-7xl font-bold",
                black ? "text-black" : "text-white")}>Supa<span className={cn(black ? "text-white": "text-orange-400")}>Menu</span></h1>
        </Link>
    )
}
export default Logo
