import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/contexts/animation-context";
import { ThemeProvider } from "@/components/theme-provider";
import { PageFade } from "@/components/page-fade";
import { CursorFollow } from "@/components/cursor-follow";
import { FloatingCta } from "@/components/floating-cta";
import { getMetaInfo } from "@/lib/data";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="folio-zine-theme-dark"
          disableTransitionOnChange>
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
