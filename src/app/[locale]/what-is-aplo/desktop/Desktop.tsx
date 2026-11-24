import { publicAsset } from "@/lib/public-asset";
import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";

export default function Desktop() {
    const t = useTranslations('WhatIsAplo');

    return (
        <>
            <p className={`${styles["page-heading"]} font-murecho`}>{t('whatIsAploTitle')}</p>
            <section className={styles['main-container']}>
                <div className={`${styles["main-info"]} ${styles["left-info"]}`}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('leadingCrypto')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('transparentBlockchain')}</p>
                </div>
                <img alt="" src={publicAsset("/what-is-aplo/image-1.png")} className={`${styles["main-image"]} ${styles["right-image"]}`}></img>
                <img alt="" src={publicAsset("/what-is-aplo/image-2.png")} className={`${styles["main-image"]} ${styles["left-image"]}`}></img>
                <div className={`${styles["main-info"]} ${styles["right-info"]}`}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('confidentialUntraceable')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('untraceableDescription')}</p>
                </div>
                <div className={`${styles["main-info"]} ${styles["left-info"]}`}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('electronicCash')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('noTransferFees')}</p>
                    <button className={styles["info-button"]}>{t('getAplo')}</button>
                </div>
                <img alt="" src={publicAsset("/what-is-aplo/image-3.png")} className={`${styles["main-image"]} ${styles["right-image"]}`}></img>
                <img alt="" src={publicAsset("/what-is-aplo/image-4.png")} className={`${styles["main-image"]} ${styles["left-image"]}`}></img>
                <div className={`${styles["main-info"]} ${styles["right-info"]}`}>
                    <p className={`${styles["info-heading"]} font-murecho`}>{t('community')}</p>
                    <p className={`${styles["info-text"]} font-murecho`}>{t('communityDescription')}</p>
                    <button className={`${styles["info-button"]} ${styles["button2"]}`}>{t('joinWorkgroup')}</button>
                </div>
            </section>
        </>
    )
}
