import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Auth = () => {
  return (
    <main className="relative h-screen">
      <div className="h-full container max-w-8xl pt-20 pb-10 px-20">
        <Card>
          <CardContent>
            <CardTitle>
              <h3>Create an account</h3>
              <p>Enter your email below to create your account</p>
            </CardTitle>
            <CardDescription>
              <Button className="bg-white hover:bg-gray-200 w-full" size={"lg"}>
                Google
              </Button>

              <div className="flex items-center gap-10">
                <Separator className="w-40" />
                <span>OR CONTINUE WITH</span>
                <Separator className="w-40" />
              </div>

              <form action="">
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="email" />
                </div>

                <div>
                  <Label>Name</Label>
                  <Input type="text" placeholder="name" />

                  <Label>Username</Label>
                  <Input type="text" placeholder="username" />
                </div>

                <div>
                  <Label>Password</Label>
                  <Input type="email" placeholder="password" />
                </div>

                <Button type="submit" className="text-white w-full">
                  Create account
                </Button>
              </form>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Auth;
