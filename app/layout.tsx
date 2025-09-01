import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buy Me a Bubble Tea",
  description: "Support Thai creators with bubble tea money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
