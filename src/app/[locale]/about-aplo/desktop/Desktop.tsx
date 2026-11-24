import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";

export default function Desktop() {
    const t = useTranslations('AboutAplo');

    return (
        <>
            <p className={`${styles["page-heading"]} font-murecho`}>{t('pageHeading')}</p>
            <section className={styles["section-container"]}>
                <p className={`${styles["about-heading"]} font-murecho`}>{t('historyHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('historyText1')}</p>
            </section>
            <section className={styles["section-container"]}>
                <p className={`${styles["about-heading"]} font-murecho`}>{t('valuesHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('valuesIntro')}</p>
                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('simplicityHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('simplicityText')}</p>
                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('securityHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('securityText')}</p>
                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('privacyHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('privacyText')}</p>
                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('decentralizationHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('decentralizationText')}</p>
            </section>
            <section className={styles["section-container"]}>
                <p className={`${styles["about-heading"]} font-murecho`}>{t('technicalInfoHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('technicalInfoText')}</p>
                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('powHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('powText')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('powText1')}<br />{t('powText2')}</p>

                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('emissionCurveHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('emissionCurveText')}</p>
                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('blocksHeading')}</p>
                <p className={`${styles["about-text"]} font-murecho`}>{t('blocksText')}</p>
                <p className={`${styles["about-paragraph-heading"]} font-murecho`}>{t('privacyTechnologiesHeading')}</p>
                <p className={`${styles["about-techno-list"]} font-murecho`}>{t('privacyTechnologiesList')}</p>
            </section>
        </>
    )
}
