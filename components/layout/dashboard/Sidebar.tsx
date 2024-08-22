"use client";

import Link from "next/link";
import { sidebarMenus } from "../../../lib/mock-data";
import { config } from "../../../lib/project.config";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { Heading } from "../../ui";
import { ISidebar } from "../../../types";

export const SidebarDashboard = ({
  minimizeSidebar,
  setMinimizeSidebar,
}: ISidebar) => {
  const pathname = usePathname();

  const isActive = (url: string) => url === pathname;
  return (
    <div
      className={cn(
        minimizeSidebar ? "w-[50px]" : "w-[220px]",
        "h-screen fixed  border-r border-input overflow-hidden",
      )}
    >
      <div
        className={cn(
          "flex gap-4 items-center border-b border-input",
          minimizeSidebar ? "p-[18px] justify-center" : "px-4 py-[17px]",
        )}
      >
        <button
          className="hover:text-zinc-500"
          onClick={() => setMinimizeSidebar((prev: boolean) => !prev)}
        >
          {minimizeSidebar ? (
            <GoSidebarCollapse size={20} />
          ) : (
            <GoSidebarExpand size={20} />
          )}
        </button>

        {!minimizeSidebar && (
          <Link href={"/"}>
            <Heading isBold variant="h4">
              {config.name}
            </Heading>
          </Link>
        )}
      </div>
      <ul className="divide-input divide-y gap-2">
        {sidebarMenus.map((menu) => (
          <li key={menu.title}>
            <Link
              className={cn(
                "flex items-center gap-2 px-4 py-4 hover:bg-zinc-800",
                minimizeSidebar && "justify-center py-[18px]",
                isActive(menu.link) && "bg-zinc-800 text-white",
              )}
              href={menu.link}
            >
              {menu.icon && <menu.icon className="shrink-0" size={20} />}
              {!minimizeSidebar && menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
