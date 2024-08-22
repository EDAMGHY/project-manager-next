import { ModeToggle } from "../../theme";
import { authenticatedUser } from "../../../lib/mock-data";
import { getUserName } from "../../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui";

export const NavbarDashboard = () => {
  return (
    <nav className="sticky z-[50] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 text-foreground top-0 left-0 w-full border-b border-input px-4">
      <div className="flex justify-between items-center">
        <p className="relative w-fit py-4">
          Welcome back,{" "}
          <span className="inline-block font-bold tracking-widest">
            {authenticatedUser.name}
          </span>{" "}
        </p>
        <div className="flex gap-5 justify-center items-center">
          <Avatar>
            <AvatarImage src="https://picsum.photos/1600" />
            <AvatarFallback>
              {getUserName(authenticatedUser.name)}
            </AvatarFallback>
          </Avatar>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
