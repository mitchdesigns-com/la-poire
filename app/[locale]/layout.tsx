/* eslint-disable @next/next/inline-script-id */
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import { arfont, poppins } from "@/app/fonts";
import { cls } from "@/app/utils/helpers";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
// import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

// export const metadata: Metadata = {
//   title: "La Poire",
//   description: "La Poire Landing Page",
// };

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

export async function generateMetadata() {
  return {
    meta: [
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "mobile-web-app-capable",
        content: "yes",
      },
      {
        httpEquiv: "X-Content-Type-Options",
        content: "nosniff",
      },
      {
        httpEquiv: "Strict-Transport-Security",
        content: "max-age=31536000; includeSubDomains; preload",
      },
    ],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        notranslate: false,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages(locale);
  const direction = locale === "en" ? "ltr" : "rtl";
  return (
    <html lang={locale} dir={direction}>
      <head>
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NVFS8L6B');
            `,
          }}
        />
      </head>
      <body className={cls(`${locale === "ar" ? arfont.className : poppins.className} bg-white`)}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVFS8L6B"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
