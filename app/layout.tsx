import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProjectManager App",
  description: "A description of the ProjectManager App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
