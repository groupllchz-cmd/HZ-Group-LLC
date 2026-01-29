import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "HZ Group LLC",
  description:
    "HZ Group LLC delivers end-to-end technology services including database, infrastructure, middleware, cloud, DevOps, secure software development, AI, web, app, and game development.",
  keywords: [
    "HZ Group LLC",
    "Tech Services",
    "Database Services",
    "Cloud Services",
    "Middleware Services",
    "DevOps",
    "AI Solutions",
    "Secure Software Development",
    "Web Development",
    "App Development",
    "Game Development",
    "Corporate Trainings",
  ],
  verification: {
    google: "N1JeJ7ujxYDZQOEy0jq3ZIixvG33wkbEwSZCQNhsobY",
  },
  authors: [{ name: "HZ Group LLC" }],
  openGraph: {
    title: "HZ Group LLC",
    description:
      "Your trusted partner for managed IT services, cloud solutions, AI integration, DevOps, and custom software development.",
    url: "https://hzgroupllc.com/",
    siteName: "HZ Group LLC",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "HZ Group LLC Technology Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <Navbar />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
