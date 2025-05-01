/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/global.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digi Samurai",
  description: "Digi Samurai is leading technology company with global reach, our enthusiasm for innovation and perfection drives us to be leaders in cybersecurity and compliance solutions. Our team of professionals is committed to establishing new benchmarks in digital protection. To secure your assets and guarantee regulatory compliance, we employ state-of-the-art technologies and sophisticated procedures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS CDN (Not recommended in Next.js, use Tailwind properly via config) */}
        <script src="https://cdn.tailwindcss.com" defer></script>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
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
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
