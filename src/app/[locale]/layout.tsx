import ThemeProvider from "@/config/ThemeProvider";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: Record<string, any>;
}) {
  let messages;
  try {
    messages = (await import(`@/locale/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    // <html lang={locale}>
    <html lang="vi">
      <head />
      <body>
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <ThemeProvider locale={locale}>
          <main>{children}</main>
        </ThemeProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t: any = await getTranslations();
  const locale = getLocale();
  const title = t("site.title");
  const description = t("site.desc");

  return {
    title,
    description,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title,
      description,
      url: "https://nextjs.org",
      siteName: title,
      images: [
        {
          url: "https://nextjs.org/og.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://nextjs.org/og-alt.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale,
      type: "website",
    },
  };
}
