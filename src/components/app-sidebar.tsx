"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import SidebarCustomMenu from "./SidebarCustomMenu";
import { useEffect } from "react";

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  useEffect(() => {
    setOpenMobile(false);
  }, [isMobile]);
  return (
    <>
      <Sidebar collapsible={"offcanvas"} className="max-w-[220px] min-w-[220px] border-none">
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
              <SidebarCustomMenu></SidebarCustomMenu>
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
      {isMobile && <SidebarTrigger className="absolute" />}
    </>
  );
}
