import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { ChevronRight, Mail } from "lucide-react";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <Button variant={"ghost"}>
        <ChevronRight /> Login to try
      </Button>
    </form>
  );
}
