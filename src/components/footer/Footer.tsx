"use client";
import { publicAsset } from "@/lib/public-asset";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { useIsMobile } from "@/hooks/use-mobile";
import desktopStyles from "./desktop.module.css";
import mobileStyles from "./mobile.module.css";

const CustomFooter = () => {
  const t = useTranslations('Footer');
  const lang = useLocale();
  const styles = useIsMobile() ? mobileStyles : desktopStyles;

  return (
    <footer className={styles.footer}>
      <div className={styles["main-container"]}>
        <div className="flex flex-row items-center">
          <Image
            src={publicAsset("/menu/logo.png")}
            width={6}
            height={3}
            alt="AploCoin logo"
            className={styles.logo}
          />
          <div className={`${styles["logo-text-container"]}`}>
            <span className={`${styles["logo-text"]}`}>{t('privateDecentralized')}</span>
            <span
              className={`${styles["logo-text"]} ${styles["padding-text"]}`}
            >
              {t('keepsFinances')}
            </span>
            <span
              className={`${styles["logo-text"]} ${styles["padding-text"]}`}
            >
              {t('confidentialSecure')}
            </span>
            <span className={`${styles["logo-text"]}`}>{t('andSecure')}</span>
          </div>
        </div>
        <div className={styles["nav-container"]}>
          <h3>{t('resources')}</h3>
          <Link href={`/${lang}/what-is-aplo`}>{t('whatIsAplo')}</Link>
          <Link href={`/${lang}/mining-aplo`}>{t('mining')}</Link>
          <Link href={`/${lang}/about-aplo`}>{t('about')}</Link>
          <Link href={`/${lang}/roadmap`}>{t('roadmap')}</Link>
        </div>
        <div className={styles["nav-container"]}>
          <h3>{t('reachOut')}</h3>
          <Link href={`/${lang}/`}>{t('contact')}</Link>
        </div>
        <div className={styles["nav-container"]}>
          <h3>{t('community')}</h3>
          <Link href={`/${lang}/`}>{t('exchanges')}</Link>
        </div>
      </div>
      <div className={styles['url-container']}>
        <Link href="https://t.me/+agd5PnUnNWAyYjEy">
          <Image src={publicAsset("/menu/telegram.svg")} alt="Telegram icon" width={15} height={15} className={styles["icon-img"]}/>
        </Link>
        <Link href="https://discord.gg/CfsneqdYBF">
          <Image src={publicAsset("/menu/discord.svg")} alt="Discord icon" width={15} height={15} className={styles["icon-img"]}/>
        </Link>
        <Link href="https://github.com/AploCoin/">
          <Image src={publicAsset("/menu/github.svg")} alt="Github icon" width={15} height={15} className={styles["icon-img"]}/>
        </Link>
      </div>
    </footer>
  );
};

export default CustomFooter;
