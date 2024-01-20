"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import Image from "next/image";

import { CheckIcon } from "@radix-ui/react-icons";

const PricingClient: React.FC = () => {
  return (
    <main className="relative h-auto">
      <div className="fixed inset-0 h-full w-full bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#f0f0f010_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f010_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-auto"
      >
        <Image
          src="/assets/images/ray.png"
          alt="image"
          width={1980}
          height={1080}
          className="object-cover fixed top-0 left-0 w-full h-full"
        />
      </motion.div>

      <div className="relative z-[1] h-full container max-w-8xl px-20 py-40">
        <div className="flex flex-col gap-4 items-center justify-center w-full h-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-pretty text-green-500"
          >
            Pricing
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-4xl text-balance font-medium"
          >
            Predictable pricing, no surprises
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-pretty text-[#a1a1aa]"
          >
            Start building for free, collaborate with a team, then scale to
            millions of users.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center flex-col lg:flex-row gap-10"
        >
          <Card className="p-5 relative flex flex-col items-center w-80 h-auto hover:shadow-xl transition-all">
            <CardHeader className="flex flex-col gap-5 mt-14">
              <CardTitle className="text-2xl">FREE</CardTitle>
              <CardDescription>
                Perfect for passion projects & simple websites.
              </CardDescription>

              <Separator />

              <CardTitle className="text-4xl">
                $0
                <span className="text-sm text-[#a1a1aa] ms-2">
                  /month / org
                </span>
              </CardTitle>
              <CardDescription>Limit of 2 free organizations.</CardDescription>

              <Separator />
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col items-start justify-start gap-10">
              <span>Get started with:</span>

              <ul className="flex flex-col gap-10 text-sm text-[#a1a1aa]">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Unlimited API
                  requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Social OAuth
                  providers
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 500MB database
                  space
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 1GB file
                  storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 200 concurrent
                  Realtime connections
                </li>
              </ul>
            </CardContent>
            <CardFooter className="w-full">
              <Button
                size={"lg"}
                variant={"default"}
                className="text-white w-full bg-green-500"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>

          <Card className="p-5 border-green-500 border relative flex flex-col items-center  w-80 h-auto hover:shadow-xl transition-all">
            <span className="absolute top-0 rounded-b-lg px-10 py-1 inline-flex animate-background-shine items-center justify-center bg-[linear-gradient(110deg,#22c55e,45%,#86EFAC,55%,#22c55e)] bg-[length:200%_100%] text-white transition-colors text-sm">
              Most Popular
            </span>

            <CardHeader className="flex flex-col gap-5 mt-14">
              <CardTitle className="text-2xl inline-flex animate-text-gradient bg-gradient-to-r from-green-700 via-green-300 to-green-700 bg-[200%_auto] bg-clip-text text-transparent">
                PRO
              </CardTitle>
              <CardDescription>
                For production applications with the option to scale.
              </CardDescription>

              <Separator />

              <CardTitle className="text-4xl">
                $25
                <span className="text-sm text-[#a1a1aa] ms-2">
                  /month / org
                </span>
              </CardTitle>
              <CardDescription>Usage-based plan.</CardDescription>

              <Separator />
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col items-start justify-start gap-10">
              <span>Get started with:</span>

              <ul className="flex flex-col gap-10 text-sm text-[#a1a1aa]">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Unlimited API
                  requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Social OAuth
                  providers
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 500MB database
                  space
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 1GB file
                  storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 200 concurrent
                  Realtime connections
                </li>
              </ul>
            </CardContent>
            <CardFooter className="w-full">
              <Button
                size={"lg"}
                className="w-full inline-flex animate-background-shine items-center justify-center rounded-md bg-[linear-gradient(110deg,#22c55e,45%,#86EFAC,55%,#22c55e)] hover:bg-[linear-gradient(110deg,#16a34a,45%,#86EFAC,55%,#16a34a)] hover:transition bg-[length:200%_100%] font-medium text-white transition-colors"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>

          <Card className="p-5 relative flex flex-col items-center w-80 h-auto hover:shadow-xl transition-all">
            <CardHeader className="flex flex-col gap-5 mt-14">
              <CardTitle className="text-2xl">ENTERPRISE</CardTitle>
              <CardDescription>
                For large-scale applications managing serious workloads.
              </CardDescription>

              <Separator />

              <CardTitle className="text-4xl">Contact us</CardTitle>
              <CardDescription className="text-transparent cursor-default">
                Contact us
              </CardDescription>

              <Separator />
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col items-start justify-start gap-10">
              <span>Get started with:</span>

              <ul className="flex flex-col gap-10 text-sm text-[#a1a1aa]">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Unlimited API
                  requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Social OAuth
                  providers
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 500MB database
                  space
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 1GB file
                  storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" /> Up to 200 concurrent
                  Realtime connections
                </li>
              </ul>
            </CardContent>
            <CardFooter className="w-full">
              <Button
                size={"lg"}
                variant={"default"}
                className="text-white w-full bg-green-500"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </main>
  );
};

export default PricingClient;
