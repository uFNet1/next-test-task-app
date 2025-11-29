"use client";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Settings } from "lucide-react";
import { SidebarMenuData } from "@/lib/types";

const items: SidebarMenuData[] = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Setting", url: "/setting", icon: Settings },
];

export default function SidebarCustomMenu() {
  const pathname = usePathname();
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          {pathname === item.url ? (
            <SidebarMenuButton asChild isActive={true}>
              <a href={item.url}>
                <item.icon />
                <span className="font-normal">{item.title}</span>
              </a>
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton asChild isActive={false}>
              <a href={item.url}>
                <item.icon />
                <span className="font-normal">{item.title}</span>
              </a>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
