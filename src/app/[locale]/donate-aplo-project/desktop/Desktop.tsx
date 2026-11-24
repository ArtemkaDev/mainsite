import { publicAsset } from "@/lib/public-asset";
import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";
import Link from "next/link";

export default function Desktop() {
    const t = useTranslations('Donate');

    return (
        <>
            <section className={styles['header-container']}>
                <p className={`${styles["header-heading"]} font-murecho`}>{t('donateToAplo')}</p>
                <p className={`${styles["header-text"]} font-murecho`}>
                    {t('donationDescription')} <Link href={""}><span className={styles["header-link"]}>{t('fundingRequired')}</span></Link>
                </p>
            </section>
            <section className={styles['main-container']}>
                <div className={styles["info-container"]}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('contributeQRCode')}</p>
                    <p className={`${styles["info-instruction"]} font-murecho`}>{t('instruction1')}</p>
                    <p className={`${styles["info-instruction"]} font-murecho`}>{t('instruction2')}</p>
                    <img alt="" src={publicAsset("/donate-to-aplo/qr.png")} className={styles["qr-image"]}></img>
                    <p className={`${styles["info-instruction"]} font-murecho`}>{t('or')}</p>
                    <p className={`${styles["info-instruction"]} font-murecho`}>{t('enterAddress')}</p>
                    <p className={`${styles["token"]} font-murecho`}>TM8DFB8Ea4sQNUfppfCr7WkSxURB5KNbuk</p>
                    <p className={`${styles["info-instruction"]} font-murecho`}>{t('anotherAdress')}</p>
                    <p className={`${styles["token"]} font-murecho`}>0x67adcF8c25c88aF0Df3caB522C9dD5b11d017aca</p>
                    <p className={`${styles["info-instruction"]} font-murecho`}>{t('sendThankYou')}</p>
                    <p className={`${styles["remark"]} font-murecho`}>{t('remark')}</p>
                </div>
            </section>
        </>
    )
}
