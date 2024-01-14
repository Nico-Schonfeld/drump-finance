"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Auth: React.FC = () => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <main className="relative h-screen">
      <div className="h-full container max-w-8xl pt-20 pb-10 px-20 flex items-center">
        <div className="bg-gray-50 dark:bg-[#121010] w-full h-full border-t border-e-0 border-b border-s">
          <h3>Crea una cuenta</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            perferendis!
          </p>
        </div>

        <div className="bg-white dark:bg-black w-full h-full border flex items-center flex-col justify-center gap-10">
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <h3 className="font-bold text-4xl">Create an account</h3>
            <p className="text-gray-400">
              Enter your email below to create your <br /> account
            </p>
          </div>

          <div className="w-[60%] flex flex-col items-center justify-center gap-5">
            <Button className="bg-white hover:bg-gray-100 border text-black transition-all w-full">
              Google
            </Button>

            <div className="text-gray-400 flex items-center justify-center w-full">
              <Separator className="w-20 mr-5" />{" "}
              <span className="text-sm ">Or continue with</span>{" "}
              <Separator className="w-20 ml-5" />
            </div>
          </div>

          <form action="" className="w-[60%] flex flex-col gap-5">
            {/* <Alert
              className="w-full bg-red-500 dark:bg-red-800 text-white"
              variant={"destructive"}
            >
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, dicta.
              </AlertDescription>
            </Alert> */}

            <div>
              <Input type="text" id="name" placeholder="johndoe" name="name" />
            </div>

            <div>
              <Input
                type="text"
                id="username"
                placeholder="John Doe"
                name="username"
              />
            </div>

            <div>
              <Input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                name="email"
              />
            </div>

            <div className="flex items-center">
              <Input
                type={viewPassword ? "text" : "password"}
                id="pass"
                placeholder="********"
                name="password"
              />

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

            <p className="text-center text-sm text-gray-400 mt-3">
              By clicking continue, you agree to our{" "}
              <span>Terms of Service</span> and <span>Privacy Policy</span>.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Auth;
