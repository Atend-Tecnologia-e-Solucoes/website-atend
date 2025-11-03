import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atend Tech - Soluções Inovadoras",
  description: "Adquira nossas soluções e transforme sua empresa",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
