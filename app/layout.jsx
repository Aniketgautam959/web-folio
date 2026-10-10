import { Caveat, Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/contexts/animation-context";
import { ThemeProvider } from "@/components/theme-provider";
import { PageFade } from "@/components/page-fade";
import { CursorFollow } from "@/components/cursor-follow";
import { FloatingCta } from "@/components/floating-cta";
import { Atmosphere } from "@/components/atmosphere";
import { getMetaInfo } from "@/lib/data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const metaInfo = getMetaInfo();
const siteUrl = metaInfo.siteUrl || "https://aniket-gautam.vercel.app";
const ogImage = metaInfo.ogImage || "/og.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: metaInfo.title,
  description: metaInfo.description,
  generator: "v0.dev",
  icons: {
    icon: metaInfo.favicon,
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: metaInfo.title,
    description: metaInfo.description,
    url: siteUrl,
    siteName: "Aniket Gautam",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Aniket Gautam — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaInfo.title,
    description: metaInfo.description,
    images: [ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${fraunces.variable} ${jetbrains.variable} ${caveat.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="folio-paper-theme"
          disableTransitionOnChange>
          <Atmosphere />
          <AnimationProvider>
            <PageFade>
              {children}
              <FloatingCta />
            </PageFade>
            <CursorFollow />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
