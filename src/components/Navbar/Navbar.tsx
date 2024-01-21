"use client";

import React from "react";
import { signIn } from "next-auth/react";
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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  MoonIcon,
  SunIcon,
  DesktopIcon,
  DashboardIcon,
  LightningBoltIcon,
  ReaderIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RegisterServer } from "@/components/Register/RegisterServer";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";

const Navbar = ({ user }: { user: any | null | User }) => {
  const path = usePathname();
  const { setTheme } = useTheme();

  const [backToTopScroll, setBackToTopScroll] = React.useState(false);
  const [viewPassword, setViewPassword] = React.useState(false);
  const [openDrawerLogin, setOpenDrawerLogin] = React.useState(false);

  const routerNext = useRouter();

  const handleClickActionLogin = async (formData: FormData) => {
    const email = formData.get("email");
    const pass = formData.get("password");

    const loginUser = {
      email,
      password: pass,
    };

    const res = await signIn("credentials", {
      ...loginUser,
      redirect: false,
    });

    if (!res?.ok) {
      console.error(res);
    } else {
      /* routerNext.push("/dashboard"); */
      location.replace("/dashboard");
    }

    if (res?.status === 401) return console.error("User not found!");
    if (res?.status === 500) return console.error("Internal Server Error");
  };

  const handleActioClient = async (FormData: FormData) => {
    const name = FormData.get("name");
    const username = FormData.get("username");
    const email = FormData.get("email");
    const password = FormData.get("password");

    const newUser = {
      name,
      username,
      email,
      password,
    };

    RegisterServer(newUser as any).then((res) => {
      if (res?.ok) {
        setOpenDrawerLogin(true);
      }
    });
  };

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
    if (
      path === "/auth/login" ||
      path === "/auth/register" ||
      path === "/dashboard" ||
      path === "/dashboard/logs"
    )
      return null;

    return (
      <header
        className={
          backToTopScroll
            ? "w-full h-auto fixed z-10 top-0 left-0 backdrop-blur-sm dark:bg-black/50 bg-white/50 border-b"
            : "w-full h-auto fixed z-10 top-0 left-0 border-b"
        }
      >
        <div className="h-auto container max-w-7xl px-10 lg:px-20 py-3 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              rel="noopener noreferrer"
              className="text-2xl font-bold"
            >
              <span className="hidden lg:flex items-center gap-2">
                Drump <span className="text-green-500">Finance.</span>
              </span>

              <span className="flex item-center lg:hidden gap-0">
                D <span className="text-green-500">F.</span>
              </span>
            </Link>

            <ul className="hidden lg:flex items-center gap-5 ">
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

          <div className="flex items-center justify-between gap-5">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="flex lg:hidden"
                >
                  <HamburgerMenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            {!user ? (
              <div className="hidden lg:flex items-center gap-3">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button
                      variant={"default"}
                      size={"sm"}
                      className="text-white"
                    >
                      Sign In
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle className="text-3xl text-center">
                          Sign In
                        </DrawerTitle>
                        <DrawerDescription className="text-center">
                          Enter your email below to create your <br /> account
                        </DrawerDescription>
                      </DrawerHeader>

                      <DrawerFooter>
                        <div className="w-full flex flex-col items-center justify-center gap-5">
                          <Button className="bg-white hover:bg-gray-100 border text-black transition-all w-full">
                            Google
                          </Button>

                          <div className="text-gray-400 flex items-center justify-center w-full">
                            <Separator className="w-20 mr-5" />{" "}
                            <span className="text-sm ">Or continue with</span>{" "}
                            <Separator className="w-20 ml-5" />
                          </div>
                        </div>

                        <form
                          action={handleClickActionLogin}
                          className="w-full flex flex-col gap-5 pb-20 pt-10"
                        >
                          <div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    autoFocus
                                    type="email"
                                    id="email"
                                    placeholder="johndoe@example.com"
                                    name="email"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Email</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>

                          <div className="flex items-center">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    type={viewPassword ? "text" : "password"}
                                    id="pass"
                                    placeholder="********"
                                    name="password"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Password</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            {viewPassword ? (
                              <Button
                                type="button"
                                size={"icon"}
                                variant={"outline"}
                                className="ml-3 w-12"
                                onClick={() => setViewPassword(!viewPassword)}
                              >
                                <EyeNoneIcon />
                              </Button>
                            ) : (
                              <Button
                                type="button"
                                size={"icon"}
                                variant={"outline"}
                                className="ml-3 w-12"
                                onClick={() => setViewPassword(!viewPassword)}
                              >
                                <EyeOpenIcon />
                              </Button>
                            )}
                          </div>

                          <Button type="submit" className="text-white">
                            Sign In with Email
                          </Button>

                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </form>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer>
                  <DrawerTrigger asChild>
                    <Button
                      variant={"ghost"}
                      size={"sm"}
                      className="text-black dark:text-white"
                    >
                      Sign up
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle className="text-3xl text-center">
                          Create an account
                        </DrawerTitle>
                        <DrawerDescription className="text-center">
                          Enter your email below to create your <br /> account
                        </DrawerDescription>
                      </DrawerHeader>

                      <DrawerFooter>
                        <div className="w-full flex flex-col items-center justify-center gap-5">
                          <Button className="bg-white hover:bg-gray-100 border text-black transition-all w-full">
                            Google
                          </Button>

                          <div className="text-gray-400 flex items-center justify-center w-full">
                            <Separator className="w-20 mr-5" />{" "}
                            <span className="text-sm ">Or continue with</span>{" "}
                            <Separator className="w-20 ml-5" />
                          </div>
                        </div>

                        <form
                          action={handleActioClient}
                          className="w-full flex flex-col gap-5 pb-20 pt-10"
                        >
                          <div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    autoFocus
                                    type="text"
                                    id="name"
                                    placeholder="johndoe"
                                    name="name"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Name</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>

                          <div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    type="text"
                                    id="username"
                                    placeholder="John Doe"
                                    name="username"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Username</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>

                          <div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    type="email"
                                    id="email"
                                    placeholder="johndoe@example.com"
                                    name="email"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Email</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>

                          <div className="flex items-center">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Input
                                    type={viewPassword ? "text" : "password"}
                                    id="pass"
                                    placeholder="********"
                                    name="password"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Password</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            {viewPassword ? (
                              <Button
                                type="button"
                                size={"icon"}
                                variant={"outline"}
                                className="ml-3 w-12"
                                onClick={() => setViewPassword(!viewPassword)}
                              >
                                <EyeNoneIcon />
                              </Button>
                            ) : (
                              <Button
                                type="button"
                                size={"icon"}
                                variant={"outline"}
                                className="ml-3 w-12"
                                onClick={() => setViewPassword(!viewPassword)}
                              >
                                <EyeOpenIcon />
                              </Button>
                            )}
                          </div>

                          <Button type="submit" className="text-white">
                            Sign In with Email
                          </Button>

                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>

                          <p className="text-center text-sm text-gray-400 mt-3">
                            By clicking continue, you agree to our{" "}
                            <span>Terms of Service</span> and{" "}
                            <span>Privacy Policy</span>.
                          </p>
                        </form>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>

                {openDrawerLogin && (
                  <Drawer open={true}>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl text-center">
                            Sign In (Tu cuenta se creo con exito)
                          </DrawerTitle>
                          <DrawerDescription className="text-center">
                            Enter your email below to create your <br /> account
                          </DrawerDescription>
                        </DrawerHeader>

                        <DrawerFooter>
                          <div className="w-full flex flex-col items-center justify-center gap-5">
                            <Button className="bg-white hover:bg-gray-100 border text-black transition-all w-full">
                              Google
                            </Button>

                            <div className="text-gray-400 flex items-center justify-center w-full">
                              <Separator className="w-20 mr-5" />{" "}
                              <span className="text-sm ">Or continue with</span>{" "}
                              <Separator className="w-20 ml-5" />
                            </div>
                          </div>

                          <form
                            action={handleClickActionLogin}
                            className="w-full flex flex-col gap-5 pb-20 pt-10"
                          >
                            <div>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Input
                                      autoFocus
                                      type="email"
                                      id="email"
                                      placeholder="johndoe@example.com"
                                      name="email"
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Email</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>

                            <div className="flex items-center">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Input
                                      type={viewPassword ? "text" : "password"}
                                      id="pass"
                                      placeholder="********"
                                      name="password"
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Password</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              {viewPassword ? (
                                <Button
                                  type="button"
                                  size={"icon"}
                                  variant={"outline"}
                                  className="ml-3 w-12"
                                  onClick={() => setViewPassword(!viewPassword)}
                                >
                                  <EyeNoneIcon />
                                </Button>
                              ) : (
                                <Button
                                  type="button"
                                  size={"icon"}
                                  variant={"outline"}
                                  className="ml-3 w-12"
                                  onClick={() => setViewPassword(!viewPassword)}
                                >
                                  <EyeOpenIcon />
                                </Button>
                              )}
                            </div>

                            <Button type="submit" className="text-white">
                              Sign In with Email
                            </Button>

                            <DrawerClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                          </form>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex pr-10">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        /* src="https://github.com/shadcn.png" */
                        src={user?.avatar}
                        alt={user?.name}
                      />
                      <AvatarFallback>{user?.name}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel>
                      <div className="flex flex-col text-[12px]">
                        <span className="font-bold">{user?.username}</span>
                        <span className="text-gray-400">{user?.email}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent hover:bg-transparent border-transparent"
                >
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
