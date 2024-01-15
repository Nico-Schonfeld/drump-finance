"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoonIcon,
  SunIcon,
  DesktopIcon,
  DashboardIcon,
  LightningBoltIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const { setTheme } = useTheme();
  const path = usePathname();

  const [backToTopScroll, setBackToTopScroll] = React.useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    scrollUp();
  }, [path]);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopScroll(true);
      } else {
        setBackToTopScroll(false);
      }
    });
  }, []);

  const renderHeader = () => {
    if (path === "/auth/login" || path === "/auth/register") return null;

    return (
      <header
        className={
          backToTopScroll
            ? "w-full h-auto fixed z-10 top-0 left-0 backdrop-blur-sm dark:bg-black/50 bg-white/50 border-b"
            : "w-full h-auto fixed z-10 top-0 left-0 border-b"
        }
      >
        <div className="h-auto container max-w-7xl px-20 py-3 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              rel="noopener noreferrer"
              className="text-xl font-bold"
            >
              Drump <span className="text-green-500">Finance.</span>
            </Link>

            <ul className="flex items-center gap-5">
              <li>
                <Link
                  className={
                    path === "/dashboard"
                      ? "text-sm font-bold text-green-500 transition-all flex items-center gap-1"
                      : "text-sm hover:text-green-500 transition-all flex items-center gap-1"
                  }
                  href="/dashboard"
                  rel="noopener noreferrer"
                >
                  <DashboardIcon width={15} height={15} /> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className={
                    path === "/pricing"
                      ? "text-sm font-bold text-green-500 transition-all flex items-center gap-1"
                      : "text-sm hover:text-green-500 transition-all flex items-center gap-1"
                  }
                  href="/pricing"
                  rel="noopener noreferrer"
                >
                  <LightningBoltIcon width={15} height={15} /> Pricing
                </Link>
              </li>
              <li>
                <Link
                  className={
                    path === "/docs"
                      ? "text-sm font-bold text-green-500 transition-all flex items-center gap-1"
                      : "text-sm hover:text-green-500 transition-all flex items-center gap-1"
                  }
                  href="/docs"
                  rel="noopener noreferrer"
                >
                  <ReaderIcon width={15} height={15} /> Docs
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm mt-0.5 dark:text-white hover:text-green-500 dark:hover:text-green-500 transition-all flex items-center gap-1"
                  href="https://twitter.com/nicoschonfeld__"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    data-testid="geist-icon"
                    fill="none"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path
                      fill="var(--geist-fill, currentColor)"
                      stroke="none"
                      d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant={"default"} size={"sm"} className="text-white">
                  Sign In
                </Button>
              </Link>

              <Link href="/auth/register">
                <Button variant={"ghost"} size={"sm"}>
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>John Doe</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuLabel>
                <div className="flex flex-col text-[12px]">
                  <span className="font-bold">John Doe</span>
                  <span className="text-gray-400">johndoe@gmail.com</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <SunIcon /> Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <MoonIcon /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <DesktopIcon /> System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    );
  };

  return <>{renderHeader()}</>;
};

export default Navbar;
