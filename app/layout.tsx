"use client";
import { GradientBackgroundCon } from "./components/QuoteGenerator/QuoteGeneratorElements";
import "./globals.css";

export const metadata = {
  title: "Inspirational Quote Generator",
  description: "Give it a chance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GradientBackgroundCon></GradientBackgroundCon>

      <body>{children}</body>
    </html>
  );
}
