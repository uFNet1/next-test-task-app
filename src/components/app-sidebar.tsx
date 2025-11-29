import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Settings } from "lucide-react";
import Image from "next/image";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Setting", url: "/setting", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="none" className="mr-8">
      <SidebarHeader className="mt-12 mb-6">
        <SidebarMenuButton
          asChild
          className="cursor-default hover:bg-transparent active:bg-transparent focus:bg-transparent"
        >
          <div className="flex items-center">
            <Image src={"/sidebar_app_photo.png"} alt="App Photo" width={32} height={32} />
            <span className="text-black font-semibold text-xl">TESTAPP</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="font-normal">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-7">
        <SidebarMenuButton
          asChild
          className="cursor-default hover:bg-transparent hover:text-sidebar-foreground active:bg-transparent active:text-sidebar-foreground focus:bg-transparent focus:text-sidebar-foreground"
        >
          <div className="flex items-center">
            <Image src={"/sidebar_user_photo.png"} alt="User Photo" width={32} height={32} />
            <div className="flex flex-col">
              <span className="text-black font-semibold text-xs">User R.</span>
              <span className="text-[10px]">test-mail@email.com</span>
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
