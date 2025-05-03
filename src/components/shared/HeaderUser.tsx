import {BellDot, Search} from "lucide-react";

const HeaderUser = ({color}:{color: string}) => {
    return (
        <div className={`flex items-center gap-2 ${color === "white" && "-mt-20"}`}>
            <Search color={color}/>
            <BellDot color={color}/>
            <div className={`w-0.5 h-6 bg-${color}`}/>
            <div className="flex items-center gap-3">
                <p className={`text-${color} text-sm`}>Jacques Kagabo</p>
                <img src="https://avatars.githubusercontent.com/u/10214025?v=4" alt="avatar" className="w-8 h-8 rounded-full"/>
            </div>
        </div>
    )
}
export default HeaderUser
