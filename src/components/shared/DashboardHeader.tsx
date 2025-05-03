import {SidebarTrigger} from "@/components/ui/sidebar.tsx";
import HeaderUser from "@/components/shared/HeaderUser.tsx";

const DashboardHeader = () => {
    return (
        <header className="flex w-full py-4 px-12 items-center justify-between">
            <div className="flex gap-4 items-center">
                <SidebarTrigger size="lg"/>
                <h3 className="text-4xl text-gray-500">Overview</h3>
            </div>
            <HeaderUser color="black"/>
        </header>
    )
}
export default DashboardHeader
