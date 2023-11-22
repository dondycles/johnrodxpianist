import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnrodxpianist.site/"),
  title: "John Rod Dondoyano | Pianist",
  description: "The Official Website of John Rod Dondoyano",
  twitter: {
    title: "John Rod Dondoyano",
    description: "The Official Website of John Rod Dondoyano.",
    card: "summary_large_image",
    creator: "@dondycles",
    images: {
      url: "/summary.jpg",
      alt: "Moneytor",
    },
  },
  openGraph: {
    title: "John Rod Dondoyano",
    description: "The Official Website of John Rod Dondoyano.",
    type: "website",
    siteName: "John Rod Dondoyano",
    url: "https://johnrodxpianist.site/",
    images: [
      {
        url: "/summary.jpg",
        width: 800,
        height: 800,
      },
      {
        url: "/summary.jpg",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
