"use client";
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  GradientBackgroundCon,
  RedSpan,
} from "./components/QuoteGenerator/QuoteGeneratorElements";
import "./globals.css";
// Assets
import Clouds1 from "./assets/cloud-and-thunder.png";
import Clouds2 from "./assets/cloudy-weather.png";
import { useState } from "react";

export const metadata = {
  title: "Inspirational Quote Generator",
  description: "Give it a chance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <html lang="en">
      <GradientBackgroundCon>
        {/* Background Images */}
        <BackgroundImage1 src={Clouds1} height="300" alt="cloudybackground1" />
        <BackgroundImage2 src={Clouds2} height="300" alt="cloudybackground2" />
        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by{" "}
            <FooterLink
              href="https://www.linkedin.com/in/natalia-jagiello/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @NataliaJagiello
            </FooterLink>{" "}
            following{" "}
            <FooterLink
              href="https://www.linkedin.com/in/natalia-jagiello/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brian H. Hough Tutorial
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>

      <body>{children}</body>
    </html>
  );
}
