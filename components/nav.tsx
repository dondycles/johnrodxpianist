"use client";

import { Avatar, Button, ButtonGroup, NextUIProvider } from "@nextui-org/react";
import logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/store";
import { FaMoon, FaLightbulb } from "react-icons/fa";

export default function Nav() {
  const theme = useTheme();
  return (
    <nav className="flex w-full p-4 justify-between border-b-1 border-b-foreground/10">
      <Link href={"/"}>
        <Image
          className={`${theme.theme === "light" && "invert"} w-[48px] h-auto`}
          src={logo}
          alt="John Rod Dondoyano"
        />
      </Link>
      <ButtonGroup
        size="md"
        color="primary"
        variant="shadow"
        radius="full"
        className="text-white"
      >
        <Button as={Link} href="/" className="font-semibold text-xs">
          HOME
        </Button>
        <Button as={Link} href="/bio" className="font-semibold text-xs ">
          BIO
        </Button>
        <Button
          isIconOnly
          onClick={() =>
            theme.setTheme(theme.theme === "dark" ? "light" : "dark")
          }
        >
          {theme.theme === "light" ? <FaMoon /> : <FaLightbulb />}
        </Button>
      </ButtonGroup>
    </nav>
  );
}
