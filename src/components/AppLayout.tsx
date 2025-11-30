import { AppSidebar } from "./app-sidebar";
import PageTitle from "./PageTitle";
import ProfileSidebar from "./ProfileSidebar";
import { SidebarProvider } from "./ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="h-full w-full">
      <AppSidebar />
      <div className="flex flex-col gap-7 mt-13 ml-8 mr-8 w-full">
        <PageTitle />
        <main className="flex-1">{children}</main>
      </div>
      <ProfileSidebar />
    </SidebarProvider>
  );
}
