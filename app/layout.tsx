import type { Metadata } from "next";
import Link from "next/link";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/profile";

const display = Oswald({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-display" });
const body = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: `${profile.title}. ${profile.tagline}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="frame">
          <header className="site-header">
            <Link href="/" className="brand">{profile.name}</Link>
            <nav className="nav">
              <Link href="/">About</Link>
              <Link href="/learn/">Learn</Link>
            </nav>
          </header>
          <div className="sheet">
            <main>{children}</main>
          </div>
          <footer className="site-footer">
            © {new Date().getFullYear()} {profile.name} · Built with Next.js, deployed on GitHub Pages
          </footer>
        </div>
      </body>
    </html>
  );
}
