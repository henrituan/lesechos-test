import { Inter } from "next/font/google";
import { css } from "@panda/css";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Newsletters | Les Echos",
  description: "Les Echos frontend test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={css({ bgColor: "bg" })}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
