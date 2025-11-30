import { Poppins } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

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
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
