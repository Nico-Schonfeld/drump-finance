import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import NavbarServer from "@/components/Navbar/NavbarServer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drump Finance | Pricing",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
