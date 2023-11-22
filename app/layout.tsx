import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "John Rod Dondoyano | Pianist",
  description: "The Official Website of John Rod Dondoyano.",
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
