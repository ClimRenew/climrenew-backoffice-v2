import type { Metadata } from "next";
import { Inter, Montserrat, Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ReduxProvider from "@/redux/redux-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-inter",
});
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Climrenew",
    template: " %s | Climrenew",
  },
  description: "Engaging communities for a greener tomorrow ",
  icons: {
    icon: "https://res.cloudinary.com/dcxdrsgjs/image/upload/v1720691405/climerenewLogo_aaefg7.png",
    apple:
      "https://res.cloudinary.com/dcxdrsgjs/image/upload/v1720691405/climerenewLogo_aaefg7.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${urbanist.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        <ReduxProvider>
          <Providers>{children}</Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
