import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";

const montserrat = Montserrat(
  { 
    weight: ["100", "300", "500"],
    subsets: ["latin"] 
  }
);

export const metadata: Metadata = {
  title: "EVOLVE",
  description: "Landing page of EVOLVE software development startup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
          <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
