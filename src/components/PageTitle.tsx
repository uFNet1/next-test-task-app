"use client";
import { getParsedDate } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTitle() {
  const pathname = usePathname();
  const [title, setTitle] = useState<string | null>(null);
  const date = new Date();
  const parsedDate = getParsedDate(date);
  useEffect(() => {
    if (pathname === "/dashboard") setTitle("My tasks");
    else if (pathname === "/setting") setTitle("Settings");
    else setTitle(null);
  }, [pathname]);
  if (!title) return;
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-medium">{title}</p>
      <span className="text-sm text-accent">
        {parsedDate.dayOfWeek},&nbsp;
        <span className="text-foreground-quaternary">
          {parsedDate.dayOfMonth} {parsedDate.month} {parsedDate.year}
        </span>
      </span>
    </div>
  );
}
