import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Edu_SA_Beginner } from "next/font/google";
import Sidebar from "./components/sidebar";
import { Analytics } from "@vercel/analytics/react";

const edusa = Edu_SA_Beginner({
  subsets: ['latin'],
  variable: "--font-edusa",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjaikumar.vercel.app"),
  title: {
    default: "Sanjaikumar V",
    template: "%s | Sanjaikumar V",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Sanjaikumar V",
    description: "Developer, writer, and creator.",
    url: "https://sanjaikumar.vercel.app",
    siteName: "Sanjaikumar V",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Sanjaikumar V",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={clsx(
        "text-black bg-[#111010]",
        edusa.variable
      )}>
      <body className='antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto font-edusa'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
