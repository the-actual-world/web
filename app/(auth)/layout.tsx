import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col lg:flex-row">
        <div className="flex-1 lg:block hidden">
          <Image
            width={1200}
            height={1200}
            src="/images/hero.webp"
            alt="Friends hanging out"
            className="object-cover h-screen w-full"
          />
        </div>
        <div className="flex-1 lg:min-w-[40rem] flex flex-col pl-10 justify-center lg:pr-24 pr-10 py-10 md:py-16 lg:py-0 lg:max-w-[50rem]">
          {children}
        </div>
      </main>

      <div className="fixed top-5 right-5 z-20">
        <ModeToggle />
      </div>
    </>
  );
}
