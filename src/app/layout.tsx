import type { Metadata } from "next";
import { Inter, Mitr, Sen } from "next/font/google";
import "@/app/globals.css";

import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import NavbarServer from "@/components/Navbar/NavbarServer";

const inter = Inter({ subsets: ["latin"] });
const sen = Sen({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drump Finance",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sen.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*    <NavbarServer /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
