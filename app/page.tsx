"use client";
import { useState } from "react";
import {
  FooterCon,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
  RedSpan,
} from "./components/QuoteGenerator/QuoteGeneratorElements";
export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  const handleOpenGenerator = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <>
      {" "}
      {/* Quote Generator Modal Pop-Up */}
      {/* <QuoteGeneratorModal
    open={openGenerator}
    close={handleCloseGenerator}
    processingQuote={processingQuote}
    setProcessingQuote={setProcessingQuote}
    quoteReceived={quoteReceived}
    setQuoteReceived={setQuoteReceived}
  /> */}
      {/* Quote Generator */}
      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>Daily Inspiration Generator</QuoteGeneratorTitle>

          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a
            random inspirational quote provided by{" "}
            <FooterLink
              href="https://zenquotes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZenQuotes API
            </FooterLink>
            .
          </QuoteGeneratorSubTitle>

          <GenerateQuoteButton onClick={handleOpenGenerator}>
            <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>
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
    </>
  );
}
