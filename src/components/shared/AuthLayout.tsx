import { Outlet } from "react-router-dom";
import Logo from "@/components/shared/Logo.tsx";

const AuthLayout = () => {
    return (
        <section className="border-x-[2rem] bg-orange-400 border-black w-full h-screen flex items-center justify-around">
            <div className="w-1/2">
                <Logo black/>
            </div>
            <Outlet />
        </section>
    )
}
export default AuthLayout
