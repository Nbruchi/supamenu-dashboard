import DashboardSidebar from "@/components/shared/DashboardSidebar.tsx";
import {Outlet} from "react-router-dom";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import DashboardHeader from "@/components/shared/DashboardHeader.tsx";

const DashboardLayout = () => {
    return (
        <section className="w-full min-h-screen mx-auto">
            <SidebarProvider>
                <DashboardSidebar/>
                <div className="flex-1">
                   <DashboardHeader/>
                    <Outlet/>
                </div>
            </SidebarProvider>
        </section>
    )
}

export default DashboardLayout
