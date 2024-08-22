import { ModeToggle } from "../../theme";
import { mainMenu } from "../../../lib/mock-data";
import { config } from "../../../lib/project.config";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky z-[50] border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 text-foreground top-0 left-0 w-full py-3">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold">{config.name}</h1>
        </Link>
        <div className="flex items-center gap-4 justify-end">
          <ul className="flex justify-start items-center gap-4">
            {mainMenu.map((menu) => (
              <li key={menu.link} className="group">
                <Link
                  className=" opacity-60 group-hover:opacity-100"
                  href={menu.link}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
