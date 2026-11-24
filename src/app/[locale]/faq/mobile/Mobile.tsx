"use client";
import { publicAsset } from "@/lib/public-asset";

import { useTranslations } from "next-intl";
import styles from "./mobile.module.css";
import Link from "next/link";

export default function Mobile() {
    const t = useTranslations("Faq");

    return (
        <>
            <p className={`${styles["page-heading"]} font-murecho`}>{t('pageHeading')}</p>
            <p className={`${styles["page-description"]} font-murecho`}>{t('pageDescription')}</p>
            <section className={styles["double-section"]}>
                <div className={styles["double-section-left"]}>
                    <div className={styles["left-container"]}>
                        <p className={`${styles["section-heading"]} font-murecho`}>{t('tableOfContentsHeading')}</p>
                        <p className={`${styles["links-heading"]} font-murecho`}>{t('basicsHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink1')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink2')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink3')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink4')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink5')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink6')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink7')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink8')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink9')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} font-murecho`}>{t('privacyHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('privacyLink1')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('privacyLink2')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('privacyLink3')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} font-murecho`}>{t('securityHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('securityLink1')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('securityLink2')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('securityLink3')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} font-murecho`}>{t('economicsHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink1')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink2')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink3')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink4')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink5')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} font-murecho`}>{t('walletsHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink1')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink2')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink3')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink4')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink5')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink6')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} font-murecho`}>{t('nodeHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink1')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink2')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink3')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink4')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink5')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink6')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink7')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                            <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink8')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        </div>
                    </div>
                </div>
                <div className={styles["double-section-right"]}>
                    <div className={styles["right-container"]}>
                        <p className={`${styles["section-heading"]} font-murecho`}>{t('resourcesAndHelpHeading')}</p>
                        <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink1')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        <p className={`${styles["page-text"]} font-murecho`}>{t('resourcesText1')}</p>
                        <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink2')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        <p className={`${styles["page-text"]} font-murecho`}>{t('resourcesText2')}</p>
                        <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink3')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        <p className={`${styles["page-text"]} font-murecho`}>{t('resourcesText3')}</p>
                        <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink4')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        <p className={`${styles["page-text"]} font-murecho`}>{t('resourcesText4')}</p>
                        <p className={`${styles["page-link"]} font-murecho`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink5')}<img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                        <p className={`${styles["page-text"]} font-murecho`}>{t('resourcesText5')}</p>
                    </div>
                </div>
            </section>
            <section className={styles["main-section"]}>
                <div className={styles["main-container"]}>
                    <p className={`${styles["section-heading"]} font-murecho`}>{t('basicsHeading')}</p>
                    <p className={`${styles["paragraph-heading"]} font-murecho`}>{t('basicsQuestion1Heading')}</p>
                    <p className={`${styles["paragraph-text"]} font-murecho`}>{t('basicsQuestion1Text')}</p>
                    <p className={`${styles["more-link"]} font-murecho`}>
                        <span>{t('basicsQuestion1MoreInfo')}: </span>
                        <Link href="">
                            <span className={`${styles["page-link-span"]}`}>
                                {t("basicsQuestion1MoreInfo")}
                                <img alt="" className={styles["page-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/>
                            </span>
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
