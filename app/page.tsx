"use client";

import Image from "next/image";
import transparent from "@/public/transparent.webp";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { FaApple, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { montserrat } from "@/utils/fonts";
export default function Home() {
  return (
    <div className=" min-h-fitw-full flex flex-row flex-wrap-reverse justify-center items-center gap-2 p-4 m-auto">
      <div className="flex flex-col gap-2">
        <p className="text-center font-semibold max-w-[300px]">
          Piano covers that are playable by beginners up to intermediate piano
          players.
        </p>
        <ButtonGroup variant="shadow" color="primary" radius="full">
          <Dropdown>
            <DropdownTrigger>
              <Button className="font-semibold text-white text-xs">
                BUY SHEETS/MIDI
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              color="primary"
              variant="shadow"
              className={montserrat.className}
            >
              <DropdownItem
                as={Link}
                href="https://mymusicsheet.com/johnroddondoyano"
                target="_blank"
                key="pianosheets"
                className="text-xl hover:text-white"
              >
                <span className="text-xs font-semibold">PIANO SHEETS</span>
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="https://payhip.com/johnroddondoyano"
                target="_blank"
                key="midis"
                className="text-xl hover:text-white"
              >
                <span className="text-xs font-semibold">
                  PIANO MIDIS & STRINGS
                </span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button className="font-semibold text-white text-xs">
                LISTEN/WATCH
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color="primary"
              variant="shadow"
              className={montserrat.className}
            >
              <DropdownItem
                as={Link}
                href="https://youtube.com/johnroddondoyano"
                target="_blank"
                key="youtube"
                className="text-xl hover:text-white"
                startContent={<FaYoutube />}
              >
                <span className="text-xs font-semibold">YOUTUBE</span>
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="https://open.spotify.com/artist/2opN2BRNgnBJIO932Kyr3U?si=3yH2nrluRqqFP1qOzM2TcA"
                target="_blank"
                key="spotify"
                className="text-xl hover:text-white"
                startContent={<FaSpotify />}
              >
                <span className="text-xs font-semibold">SPOTIFY</span>
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="https://music.apple.com/us/artist/john-rod-dondoyano/1716913960"
                target="_blank"
                key="applemusic"
                className="text-xl hover:text-white"
                startContent={<FaApple />}
              >
                <span className="text-xs font-semibold">APPLE MUSIC</span>
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="https://www.tiktok.com/@dondycles"
                target="_blank"
                key="tktok"
                className="text-xl hover:text-white"
                startContent={<FaTiktok />}
              >
                <span className="text-xs font-semibold">TIKTOK</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
      </div>
      <Image
        src={transparent}
        alt="John Rod Dondoyano"
        priority
        className="w-64 h-64 rounded-full shrink-0 drop-shadow"
      />
    </div>
  );
}
