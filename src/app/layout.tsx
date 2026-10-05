import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RegisterElements from "../shared/lib/ui/web/RegisterElements";
import { getAuthor } from "../entities/author/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const author = await getAuthor();

export const metadata: Metadata = {
  title: `${author.name}: ${author.title}`,
  description: `Personal site of ${author.name}, the ${author.title}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RegisterElements />
        {children}
      </body>
    </html>
  );
}
