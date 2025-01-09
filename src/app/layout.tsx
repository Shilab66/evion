import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background bg-grid bg-glow" suppressHydrationWarning>
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2 text-xl text-foreground gradient-text title-text">
                <Image 
                  src="/logo.jpg" // Assuming your file is named logo.jpg
                  alt="Evion Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                Evion
              </Link>
              <div className="hidden md:flex space-x-4">
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
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

