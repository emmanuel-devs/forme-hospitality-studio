import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "FORME Hospitality Studio | Interiors & Bespoke Experiences",
  description: "Thoughtful hospitality interiors, considered furnishing, and bespoke immersive spaces for hotels, vacation rentals, and distinctive properties.",
  applicationName: "FORME Hospitality Studio",
  openGraph: {
    title: "FORME Hospitality Studio",
    description: "Spaces designed to make people feel something.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#F0EAE0", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${cormorant.variable} ${manrope.variable}`}>{children}</body></html>;
}
