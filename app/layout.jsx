import { Inter } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/contexts/animation-context";
import { getMetaInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

const metaInfo = getMetaInfo();

export const metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  generator: "v0.dev",
  icons: {
    icon: metaInfo.favicon,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
