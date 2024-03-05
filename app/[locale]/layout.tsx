import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_components/Header/Header";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { cls } from "@/app/utils/helpers";
import { poppins } from "@/app/fonts";
import Footer from "@/app/_components/Footer/Footer";
// import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "La Poire",
  description: "La Poire Landing Page",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string }; // Ensure params has locale property
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages(locale);
  const direction = locale === "en" ? "ltr" : "rtl";
  return (
    <html lang={locale} dir={direction}>
      <body className={cls(`${poppins.className} bg-white`)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="overflow-hidden">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
