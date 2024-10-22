import { auth } from "../auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOut } from "./sign-out";

export default async function UserAvatar() {
  const session = await auth();

  if (!session) return null;

  console.log(session);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <img
            className="rounded-full h-8 w-8"
            src={session?.user?.image ?? ""}
            alt="User Avatar"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
