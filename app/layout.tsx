import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header/Header";
import { cls } from "./utils/helpers";
import { poppins } from "./fonts";
import Footer from "./_components/Footer/Footer";

export const metadata: Metadata = {
  title: "La Poire",
  description: "La Poire Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(`${poppins.className} bg-white`)}>
        <div className="overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
