"use client";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { CircularProgress } from "./ui/radial-progress";
import { Button } from "./ui/button";
import { useEffect } from "react";

const image = <Image src={"/sidebar_user_photo_large.png"} alt="App Photo" width={80} height={80} />;

export default function ProfileSidebar() {
  const { isMobile, setOpenMobile, setOpen } = useSidebar();
  useEffect(() => {
    setOpenMobile(false);
  }, [isMobile]);
  const pathname = usePathname();
  if (pathname !== "/setting") return;
  if (isMobile) return;
  return (
    <Sidebar collapsible="none" side="right" className="max-w-[312px] min-w-[312px]">
      <SidebarHeader className="mt-12 mb-6">
        <div className="flex flex-col gap-1 px-2">
          <p className="text-black font-medium text-xl">My Profile</p>
          <p className="text-accent text-sm">75% completed your profile</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex justify-center">
              <CircularProgress value={75} size={120} strokeWidth={3} showImage renderImage={image} />
            </div>
            <div className="flex flex-col text-center gap-2.5 mt-3">
              <p className="text-base text-foreground font-medium">User R.</p>
              <p>Developer at White Digital</p>
            </div>
            <hr className="mt-2.5 w-[256px] mx-auto border-[#F5F6FA] " />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-7">
        <div className="px-2">
          <Button variant="destructive" className="text-xs font-bold px-[120px] mx-auto block">
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
