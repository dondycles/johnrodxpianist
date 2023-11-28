// app/providers.tsx
"use client";

import { Divider, Link, NextUIProvider } from "@nextui-org/react";

import { Montserrat } from "next/font/google";
import { useTheme } from "@/store";
import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { montserrat } from "@/utils/fonts";

export default function Providers({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (hydrated)
    return (
      <NextUIProvider
        className={`max-h-[100dvh] h-screen w-full relative bg-background text-foreground text-sm sm:text-base flex flex-col ${
          montserrat.className
        } ${theme.theme === "dark" ? "dark" : "light"}`}
      >
        <Nav />
        <main className="flex flex-col w-full max-h-full h-screen overflow-y-auto overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </NextUIProvider>
    );
}
