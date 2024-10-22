import { auth } from "@/auth";
import { SignOut } from "@/components/sign-out";
import UserAvatar from "@/components/userAvatar";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-4xl">Overview</h2>
    </div>
  );
}

export default page;
