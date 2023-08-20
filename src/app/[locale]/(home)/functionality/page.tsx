import { useTranslations } from "next-intl";

export default function Page() {
  const t: any = useTranslations();
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-center text-4xl font-extrabold !leading-tight tracking-tighter">{t("nav.functionality")}</h1>
    </section>
  );
}
