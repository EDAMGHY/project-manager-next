"use client";

import {
  NavbarDashboard,
  FooterDashboard,
  SidebarDashboard,
} from "../../components/layout";
import { cn } from "../../lib/utils";
import { ReactNode, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [minimizeSidebar, setMinimizeSidebar] = useState<boolean>(false);

  return (
    <div className="flex">
      <SidebarDashboard {...{ minimizeSidebar, setMinimizeSidebar }} />
      <div
        className={cn("w-full", minimizeSidebar ? "ml-[50px]" : "ml-[220px]")}
      >
        <NavbarDashboard />
        <main className="p-4">{children}</main>
        <FooterDashboard />
      </div>
    </div>
  );
}
