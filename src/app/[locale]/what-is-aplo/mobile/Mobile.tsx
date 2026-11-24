import { publicAsset } from "@/lib/public-asset";
import styles from "./mobile.module.css";
import {useTranslations} from "next-intl";

export default function Mobile() {
    const t = useTranslations('WhatIsAplo');

    return (
        <>
            <p className={`${styles["page-heading"]} font-murecho`}>{t('whatIsAploTitle')}</p>
            <section className={styles["main-section"]}>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('leadingCrypto')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('transparentBlockchain')}</p>
                </div>
                <img alt="" src={publicAsset("/what-is-aplo/image-1.png")} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('confidentialUntraceable')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('untraceableDescription')}</p>
                </div>
                <img alt="" src={publicAsset("/what-is-aplo/image-2.png")} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('electronicCash')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('noTransferFees')}</p>
                    <button className={styles["main-button"]}>{t('getAplo')}</button>
                </div>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('community')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('communityDescription')}</p>
                    <button className={styles["main-button"]}>{t('joinWorkgroup')}</button>
                </div>
            </section>
        </>
    )
}