import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import Logo from "@/components/shared/Logo.tsx";
import {sidebarItems} from "@/constants";
import {Link, useLocation} from "react-router-dom";

const DashboardSidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <Sidebar>
            <SidebarGroup className="bg-black min-h-screen">
                <SidebarGroupLabel className="px-10 py-14">
                    <Logo className="text-4xl leading-loose"/>
                </SidebarGroupLabel>
                <SidebarContent className="flex flex-col gap-10 justify-between">
                    <SidebarMenu>
                       {sidebarItems.slice(0,4).map((item) => {
                           const Icon = item.icon;
                           const active = isActive(item.href);
                           return (
                               <SidebarMenuItem key={item.id}>
                                   <SidebarMenuButton asChild className={`sidebar-btn ${active ? 'sidebar-btn-active' : ''}`}>
                                       <Link to={item.href} className="flex items-center gap-4 text-white">
                                           <Icon size={30}/>
                                           <p className="text-2xl">{item.title}</p>
                                       </Link>
                                   </SidebarMenuButton>
                               </SidebarMenuItem>
                           )})}
                    </SidebarMenu>
                    <SidebarMenu>
                       {sidebarItems.slice(4,6).map((item) => {
                           const Icon = item.icon;
                           const active = isActive(item.href);
                           return (
                               <SidebarMenuItem key={item.id}>
                                   <SidebarMenuButton asChild className={`sidebar-btn ${active ? 'sidebar-btn-active' : ''}`}>
                                       <Link to={item.href} className="flex items-center gap-4 text-white">
                                           <Icon size={30}/>
                                           <p className="text-2xl">{item.title}</p>
                                       </Link>
                                   </SidebarMenuButton>
                               </SidebarMenuItem>
                           )})}
                    </SidebarMenu>
                </SidebarContent>
            </SidebarGroup>
        </Sidebar>
    )
}

export default DashboardSidebar
