"use client";
import {
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon,
} from "./components/QuoteGenerator/QuoteGeneratorElements";
import "./globals.css";
// Assets
import Clouds1 from "./assets/cloud-and-thunder.png";
import Clouds2 from "./assets/cloudy-weather.png";

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
      <GradientBackgroundCon>
        {/* Background Images */}
        <BackgroundImage1 src={Clouds1} height="300" alt="cloudybackground1" />
        <BackgroundImage2 src={Clouds2} height="300" alt="cloudybackground2" />
        {children}
      </GradientBackgroundCon>
    </html>
  );
}
