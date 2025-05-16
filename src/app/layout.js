/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// app/layout.tsx or any page file using metadata export
export const metadata = {
  title: "Home",
  description:
    "Comprehensive Insights, Simplified. Digi Samurai commands 360-degree mastery in information security and IT domains, turning complex challenges into powerful, actionable strategies for unparalleled success. Transform challenges into opportunities. Unlock customized solutions crafted to meet your unique needs and propel your business forward. We turn potential obstacles into strategic advantages, helping you thrive in an ever-evolving landscape. Your expertise, always available.",
  authors: [{ name: "Digi Samurai" }],
  keywords:
    "Digi Samurai, cybersecurity, compliance, digital protection, technology solutions, innovation, global reach, digital assets, regulatory compliance, kolktata, kolkata cybersecurity, kolkata compliance, kolkata technology, kolkata digital protection, kolkata innovation",
  openGraph: {
    type: "website",
    url: "https://digisamurai.co.in/",
    title: "Home",
    description:
      "Comprehensive Insights, Simplified. Digi Samurai commands 360-degree mastery in information security and IT domains, turning complex challenges into powerful, actionable strategies for unparalleled success. Transform challenges into opportunities. Unlock customized solutions crafted to meet your unique needs and propel your business forward.",
    images: [
      {
        url: "https://digisamurai.vercel.app/shareable.png",
        width: 1200,
        height: 630,
        alt: "Digi Samurai Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home",
    description:
      "Comprehensive Insights, Simplified. Digi Samurai commands 360-degree mastery in information security and IT domains, turning complex challenges into powerful, actionable strategies for unparalleled success.",
    images: ["https://digisamurai.vercel.app/shareable.png"],
    site: "https://digisamurai.co.in/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />

        {/* Google Fonts - Roboto */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />

        {/* Google Fonts - Jura */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jura:wght@400;700&display=swap"
        />

        {/* Google Fonts - Josefin Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
