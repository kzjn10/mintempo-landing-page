import type React from "react";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Mintempo",
  description:
    "Weather, everyday conversions, and world clocks — together in one calm place.",
  icons: {
    icon: "/mintempo/icon.png",
    apple: "/mintempo/icon.png",
  },
  openGraph: {
    title: "Mintempo",
    description:
      "Weather, everyday conversions, and world clocks — together in one calm place.",
    images: ["/mintempo/feature-graphic.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} scroll-smooth`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
