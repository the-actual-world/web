import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function StartPage() {
  return (
    <>
      <Image
        width={100}
        height={100}
        src="/images/logo.png"
        alt="The Actual World logo"
        className="w-20 md:mb-14 mb-6"
      />
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium">
        Actually Social
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl">Social Media</h1>
      <p className="text-lg sm:text-xl mt-6 md:mt-10 text-muted-foreground">
        We don&apos;t sell your data, we don&apos;t track you, we don&apos;t try
        to keep you on the platform for longer{" "}
        <span className="italic">(actually the opposite)</span>. Hang out with
        your friends, share photos, and have fun. That&apos;s it.
      </p>

      <div className="flex mt-6 md:mt-10 items-center">
        <Link
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            })
          )}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
            }),
            "ml-4"
          )}
          href="/register"
        >
          Register
        </Link>
      </div>

      <div className="flex mt-6 md:mt-10">
        <a href="https://join.theactual.world" className="link">
          About
        </a>
        <Link href="/privacy" className="link ml-4">
          {" "}
          Privacy{" "}
        </Link>
        <Link href="/terms" className="link ml-4">
          {" "}
          Terms{" "}
        </Link>
      </div>
    </>
  );
}
