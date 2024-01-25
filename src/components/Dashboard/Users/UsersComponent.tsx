"use client";

import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  BarChartIcon,
  CaretSortIcon,
  DashboardIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { usePathname } from "next/navigation";

const UsersComponent = ({ user, users }: { user: any; users: any }) => {
  const path = usePathname();

  const listLinks = [
    {
      id: 0,
      title: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon width={15} height={15} />,
    },
    {
      id: 1,
      title: "Logs",
      path: "/dashboard/logs",
      icon: <BarChartIcon width={15} height={15} />,
    },
    { id: 2, title: "Logs", path: "/dashboard/logs", icon: "..." },
    { id: 3, title: "Logs", path: "/dashboard/logs", icon: "..." },
    { id: 4, title: "Logs", path: "/dashboard/logs", icon: "..." },
    { id: 5, title: "Logs", path: "/dashboard/logs", icon: "..." },
    {
      id: 6,
      title: "Users",
      path: "/dashboard/users",
      icon: <PersonIcon width={15} height={15} />,
    },
  ];

  return (
    <main className="relative h-dvh">
      <div className=" h-full">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={13}
            minSize={4}
            maxSize={13}
            className="w-full h-full py-10 px-2"
          >
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex flex-col gap-10 items-start">
                <Link href="/" className="text-xl font-bold px-5">
                  Drump <span className="text-green-500">Finance</span>
                </Link>

                <ul className="w-full">
                  {listLinks?.map((item, index) => (
                    <li key={item.id}>
                      <Button className="w-full relative" variant={"ghost"}>
                        <Link
                          href={item.path}
                          className={
                            path === item?.path
                              ? "text-base font-semibold text-green-500 transition-all flex items-center gap-2 absolute left-5"
                              : "text-base flex items-center gap-2 absolute left-5"
                          }
                        >
                          {item.icon} <span>{item.title}</span>
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center justify-between bg-gray-50 dark:bg-[#1c1917] p-2 rounded-full overflow-hidden">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback>{user?.name}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col gap-0 items-start text-sm">
                        <p className="font-bold">
                          {user?.username?.length > 18
                            ? `${user?.username?.slice(0, 18)}...`
                            : user?.username ?? "John Doe"}
                        </p>
                        <span className="text-[#a1a1aa]">
                          {user?.email?.length > 18
                            ? `${user?.email.slice(0, 18)}...`
                            : user?.email ?? "johndoe@test.com"}
                        </span>
                      </div>
                    </div>
                    <CaretSortIcon className="me-3 text-[#a1a1aa]" />
                  </div>
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
          </ResizablePanel>
          <ResizableHandle className="bg-[#a1a1aa20]" withHandle />
          <ResizablePanel defaultSize={87} className="p-5">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.username}
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell className="text-right">
                      {user.username}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
};

export default UsersComponent;
