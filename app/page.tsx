import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import ThemeSwitch from "@/components/ThemeSwitch";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import SparklesText from "@/components/ui/sparkles-text";
import { ArrowRightIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) return redirect("/dashboard");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 p-4">
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>🤞 Save your memories</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
      <h2 className="font-bold text-4xl mt-5 md:text-6xl text-center text-gray-800 mb-4">
        Chasing Shadows of <SparklesText text="Stories" />
      </h2>
      <p className="text-lg text-gray-600 text-center mb-6 max-w-xl">
        Log Your Progress and Rediscover What You Love
      </p>
      <SignIn />
    </div>
  );
}
