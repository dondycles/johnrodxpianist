"use client";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  bg-foreground/5 mb-0 mt-auto p-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1 lg:mx-auto">
          <p className="font-semibold text-primary sm:border-b-[1px] sm:border-b-primary/50">
            LET'S CONNECT!
          </p>
          <Link
            className="text-xs"
            href="https://facebook.com/dondycles"
            target="_blank"
            color="foreground"
          >
            Facebook
          </Link>
          <Link
            className="text-xs"
            href="https://instagram.com/dondycles"
            target="_blank"
            color="foreground"
          >
            Instagram
          </Link>
          <Link
            className="text-xs"
            href="https://tiktok.com/@dondycles"
            target="_blank"
            color="foreground"
          >
            TikTok
          </Link>
          <Link
            className="text-xs"
            href="https://x.com/dondycles"
            target="_blank"
            color="foreground"
          >
            X
          </Link>
        </div>
        <div className="flex flex-col gap-1 lg:mx-auto">
          <p className="font-semibold text-primary  sm:border-b-[1px] sm:border-b-primary/50">
            BUY
          </p>
          <Link
            className="text-xs"
            href="https://mymusicsheet.com/johnroddondoyano"
            target="_blank"
            color="foreground"
          >
            Piano Sheets
          </Link>
          <Link
            className="text-xs"
            href="https://payhip.com/johnroddondoyano"
            target="_blank"
            color="foreground"
          >
            Piano MIDIs & Strings
          </Link>
        </div>
        <div className="flex flex-col gap-1 lg:mx-auto">
          <p className="font-semibold text-primary  sm:border-b-[1px] sm:border-b-primary/50">
            LISTEN/WATCH
          </p>
          <Link
            className="text-xs"
            href="https://open.spotify.com/artist/2opN2BRNgnBJIO932Kyr3U?si=3yH2nrluRqqFP1qOzM2TcA"
            target="_blank"
            color="foreground"
          >
            Spotify
          </Link>
          <Link
            className="text-xs"
            href="https://music.apple.com/us/artist/john-rod-dondoyano/1716913960"
            target="_blank"
            color="foreground"
          >
            Apple Music
          </Link>
          <Link
            className="text-xs"
            href="https://youtube.com/johnroddondoyano"
            target="_blank"
            color="foreground"
          >
            YouTube
          </Link>
          <Link
            className="text-xs"
            href="https://www.tiktok.com/@dondycles"
            target="_blank"
            color="foreground"
          >
            TikTok
          </Link>
        </div>
        <div className="flex flex-col gap-1 lg:mx-auto">
          <p className="font-semibold text-primary sm:border-b-[1px] sm:border-b-primary/50">
            INQUIRIES?
          </p>
          <Link
            className="text-xs"
            href="mailto&#58;johnroddondoyano8&#64;gmail&#46;com"
            target="_blank"
            color="foreground"
          >
            Email
          </Link>
        </div>
      </div>
      <p className=" text-[10px] sm:text-xs text-center opacity-50">
        John Rod Dondoyano | All Rights Reserved 2023
      </p>
    </footer>
  );
}
