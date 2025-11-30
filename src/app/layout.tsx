import { Poppins } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import PageTitle from "@/components/PageTitle";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} h-full w-full`}>
      <body className="antialiased h-full">
        <SidebarProvider className="h-full w-full">
          <AppSidebar />
          <div className="flex flex-col gap-7 mt-13 w-full">
            <PageTitle />
            <main className="flex-1">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
