"use client";

import { Menu, MenuContent, MenuRadioGroup, MenuRadioItem, MenuTrigger } from "@ui-sdk/react/menu";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const themes = ["light", "dark", "system"] as const;

export function ThemeSwitcher() {
  const t = useTranslations("Menu");
  const { theme, setTheme } = useTheme();

  return (
    <Menu>
      <MenuTrigger data-variant="outline" aria-label={t("theme")} className="w-10 justify-center">
        <Sun className="h-5 w-5 dark:hidden" aria-hidden="true" />
        <Moon className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      </MenuTrigger>
      <MenuContent align="end" sideOffset={6}>
        <MenuRadioGroup value={theme ?? "system"} onValueChange={setTheme}>
          {themes.map((option) => (
            <MenuRadioItem key={option} value={option} closeOnSelect>
              {t(option)}
            </MenuRadioItem>
          ))}
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}
