import Link from "next/link";
import React from "react";
import UserAvatar from "./userAvatar";
import { Button } from "./ui/button";
import ThemeSwitch from "./ThemeSwitch";
import { SignOut } from "./sign-out";

function Header() {
  return (
    <header className="w-full border-b flex-col">
      <div className="wrapper flex items-center justify-between px-5">
        <Link
          href={"/"}
          className="w-36 font-bold text-primary text-lg md:text-1xl"
        >
          PathMark
        </Link>

        <nav className="hidden md:flex md:flex-between max-w-xs">
          <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row ">
            <li>
              <Link href={"/dashboard"}>Overview</Link>
            </li>
            <li>
              {" "}
              <Link href={"/dashboard/collection"}>Collection</Link>
            </li>
            <li>
              {" "}
              <Link href={"/dashboard/setting"}>Setting</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-2 p-5 justify-end">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
