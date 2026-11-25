import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const body = Manrope({ subsets: ["latin"], variable: "--f-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Care Guide | Back Office Support & Digital Technology Partner in Bangladesh",
  description:
    "Care Guide helps businesses improve operations with reliable back office support, virtual teams, AI automation, DevOps engineering, web development, SEO and creative services from Dhaka, Bangladesh.",
  icons: { icon: "/img/logo-mark.webp" },
};

export const viewport: Viewport = { themeColor: "#eeede9", width: "device-width", initialScale: 1 };

const bootScript = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-anim')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
