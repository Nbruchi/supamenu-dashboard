import Logo from "./Logo.tsx";
import HeaderUser from "@/components/shared/HeaderUser.tsx";

const Header = () => {
    return (
        <header className="w-full bg-black px-8 py-12 flex justify-between">
           <div className="mt-20">
               <Logo/>
           </div>
            <HeaderUser color="white"/>
        </header>
    )
}

export default Header
