import { publicAsset } from "@/lib/public-asset";
import styles from "./mobile.module.css";
import {useLocale, useTranslations} from "next-intl";
import { Charts } from "@/components/crypto/charts";
import Info from "@/components/crypto/info";
import Link from "next/link";

export default function Mobile() {
    const t = useTranslations('Index');
    const lang = useLocale();


    return (
        <>
            <main className={styles["main-container"]}>
                <img alt="" src={publicAsset("/main/main-image-m.png")} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["main-heading"]} font-murecho`}>{t('aploMeansMoney')}</p>
                    <p className={`${styles["main-text"]} font-murecho`}>{t('privateDecentralized')}</p>
                </div>
                <div className={styles["main-buttons"]}>
                    <Link href={`/${lang}/about-aplo`} className={styles["main-button1"]}>{t('aboutAplo')}</Link>
                    <Link href="https://t.me/aplocoin_community" target='_blank' className={styles["main-button2"]}>{t('joinCommunity')}</Link>
                </div>
            </main>
            <section className={styles["advantages-container"]}>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} font-murecho`}>{t('chooseWallet')}</p>
                    <p className={`${styles["advantages-text"]} font-murecho`}>{t('walletDescription')}</p>
                </div>
                <img alt="" src={publicAsset("/main/advantage-image-1.png")} className={styles["advantage-image"]}/>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} font-murecho`}>{t('getCoins')}</p>
                    <p className={`${styles["advantages-text"]} font-murecho`}>{t('getCoinsDescription')}</p>
                </div>
                <img alt="" src={publicAsset("/main/advantage-image-2.png")} className={styles["advantage-image"]}/>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} font-murecho`}>{t('useCurrency')}</p>
                    <p className={`${styles["advantages-text"]} font-murecho`}>{t('useCurrencyDescription')}</p>
                </div>
                <img alt="" src={publicAsset("/main/advantage-image-3.png")} className={styles["advantage-image"]}/>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} font-murecho`}>{t('findAnswers')}</p>
                    <p className={`${styles["advantages-text"]} font-murecho`}>{t('faqDescription')}</p>
                </div>
                <Link href={`/${lang}/faq`} className={styles["advantages-faq-button"]}>{t('faq')}</Link>
            </section>
            <section className={styles["guides-container"]}>
                <p className={`${styles["guides-heading"]} font-murecho`}>{t('guidesResources')}</p>
                <p className={`${styles["guides-text"]} font-murecho`}>{t('guidesResourcesDescription')}</p>
                <Link href={`/${lang}/user-guides`} className={styles["guides-button"]}>{t('userGuides')}</Link>
            </section>
            <section className={styles["aplopedia-container"]}>
                <p className={`${styles["aplopedia-heading"]} font-murecho`}>{t('aplopedia')}</p>
                <p className={`${styles["aplopedia-text"]} font-murecho`}>{t('aplopediaDescription')}</p>
                <Link href="#" target='_blank' className={styles["aplopedia-link"]}><p>{t('readAplopedia')}</p></Link>
            </section>
            <section className={styles["community-container"]}>
                <p className={`${styles["community-heading"]} font-murecho`}>{t('joinCommunity')}</p>
                <div className={styles["community-info"]}>
                    <p className={`${styles["community-info-heading"]} font-murecho`}>{t('contribute')}</p>
                    <p className={`${styles["community-info-text"]} font-murecho`}>{t('contributeDescription')}</p>
                </div>
                <Link href="https://github.com/AploCoin/" target='_blank' className={styles["community-button1"]}>{t('contributing')}</Link>
                <div className={styles["community-info"]}>
                    <p className={`${styles["community-info-heading"]} font-murecho`}>{t('researchLab')}</p>
                    <p className={`${styles["community-info-text"]} font-murecho`}>{t('researchLabDescription')}</p>
                </div>
                <img alt="" src={publicAsset("/main/community-image-2.png")} className={styles["community-image"]}/>
                <div className={styles["community-info"]}>
                    <p className={`${styles["community-info-heading"]} font-murecho`}>{t('meetCommunity')}</p>
                    <p className={`${styles["community-info-text"]} font-murecho`}>{t('meetCommunityDescription')}</p>
                </div>
                <Link href="https://t.me/aplocoin_community" target='_blank' className={styles["community-button2"]}>{t('hangouts')}</Link>
            </section>
            <section className={styles["advantages-container"]}>
                <Charts/>
                <Info/>
            </section>
        </>
    )
}