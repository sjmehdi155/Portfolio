import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Rivera | UI/UX Designer & Frontend Developer",
  description:
    "Crafting beautiful, user-centered digital experiences. UI/UX Designer and Frontend Developer passionate about creating intuitive interfaces and seamless interactions.",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "Web Design",
    "React Developer",
    "Next.js",
    "User Experience Design",
  ],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera | UI/UX Designer & Frontend Developer",
    description:
      "Crafting beautiful, user-centered digital experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera | UI/UX Designer & Frontend Developer",
    description: "Crafting beautiful, user-centered digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

