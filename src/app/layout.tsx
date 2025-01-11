"use client"

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = "#impact";

    if (pathname === "/") {
      // Smooth scroll if already on the home page
      const target = document.querySelector(targetId);
      target?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the home page and scroll
      await router.push("/");
      const target = document.querySelector(targetId);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-background bg-grid bg-glow" suppressHydrationWarning>
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-6 text-3xl text-foreground gradient-text title-text">
                <Image 
                  src="/logo.jpg"
                  alt="Evion Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="flex items-center">
                  <b> EVION </b>
                </span>
              </Link>
              <div className="hidden md:flex space-x-6">
                {/* Smooth Scroll Link */}
                <a
                  href="#impact"
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleLinkClick}
                >
                  Impact
                </a>
                <Link href="/about" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
