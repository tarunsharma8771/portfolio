import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/site";
import "./globals.css";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: `${site.name} | ${site.title}`, template: `%s | ${site.name}` },
  description: site.summary,
  openGraph: { title: site.name, description: site.summary, type: "website" },
  robots: { index: true, follow: true },
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="en"><body suppressHydrationWarning><Header/><main id="main-content">{children}</main><Footer/></body></html>;
}
