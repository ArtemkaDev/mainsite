"use client";

import { Menu, MenuContent, MenuRadioGroup, MenuRadioItem, MenuTrigger } from "@ui-sdk/react/menu";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { isLocale, locales } from "@/lib/locales";
import { publicAsset } from "@/lib/public-asset";

export default function LanguageSwitcher({ onChange }: { onChange?: () => void }) {
  const t = useTranslations("Menu");
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = useLocale();
  const selected = locales.find(({ code }) => code === activeLocale) ?? locales[0];

  function changeLocale(locale: string) {
    if (!isLocale(locale) || locale === selected.code) return;

    const path = pathname.slice(selected.code.length + 1);
    router.push(`/${locale}${path || "/"}${window.location.search}${window.location.hash}`);
    onChange?.();
  }

  return (
    <Menu>
      <MenuTrigger data-variant="outline" aria-label={t("language")} className="px-3">
        <Image src={publicAsset(selected.flag)} width={20} height={15} alt="" />
        <span lang={selected.languageTag}>{selected.code.toUpperCase()}</span>
        <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
      </MenuTrigger>
      <MenuContent align="end" sideOffset={6}>
        <MenuRadioGroup value={selected.code} onValueChange={changeLocale}>
          {locales.map(({ code, flag, label, languageTag }) => (
            <MenuRadioItem key={code} value={code} label={label} lang={languageTag} closeOnSelect>
              <Image src={publicAsset(flag)} width={20} height={15} alt="" />
              {label}
            </MenuRadioItem>
          ))}
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}
