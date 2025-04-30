import Logo from "./Logo.tsx";
import {BellDot, Search} from "lucide-react";

const Header = () => {
    return (
        <header className="w-full bg-black px-8 py-12 flex justify-between">
           <div className="mt-20">
               <Logo/>
           </div>
            <div className="flex items-center gap-2 -mt-20">
                <Search color="white"/>
                <BellDot color="white"/>
                <div className="w-0.5 h-6 bg-white"/>
                <div className="flex items-center gap-3">
                    <p className="text-white text-sm">Jacques Kagabo</p>
                    <img src="https://avatars.githubusercontent.com/u/10214025?v=4" alt="avatar" className="w-8 h-8 rounded-full"/>
                </div>
            </div>
        </header>
    )
}

export default Header
