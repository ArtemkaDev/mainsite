"use client";
import { publicAsset } from "@/lib/public-asset";

import { useTranslations } from "next-intl";
import styles from "./desktop.module.css";
import Link from "next/link";

export default function Desktop() {
  const t = useTranslations("MiningAplo");

  return (
    <>
      <p className={`${styles["page-heading"]} font-murecho`}>
        {t("pageHeading")}
      </p>
      <p className={`${styles["page-description"]} font-murecho`}>
        {t("pageDescription")}
      </p>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} font-murecho`}>
            {t("proofOfWorkHeading")}
          </p>
          <p className={`${styles["section-text"]} font-murecho`}>
            {t("proofOfWorkText")}
          </p>
          
          <p className={`${styles["section-heading"]} font-murecho`}>
            {t("miningModesHeading")}
          </p>
          <p className={`${styles["section-text"]} font-murecho`}>
            {t("miningModesText")}
          </p>

          <p className={`${styles["section-heading"]} font-murecho`}>
            {t("differencesHeading")}
          </p>
          
          <div className={styles["advantages"]}>
            <div className={styles["advantages-column"]}>
              <p className={`${styles["advantages-heading"]} font-murecho`}>
                {t("aploHeading")}
              </p>
              <p className={`${styles["advantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/check.png")} />
                  {t("aploAdvantage1")}
                </span>
              </p>
              <p className={`${styles["advantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/check.png")} />
                  {t("aploAdvantage2")}
                </span>
              </p>
              <p className={`${styles["advantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/check.png")} />
                  {t("aploAdvantage3")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/cross.png")} />
                  {t("aploDisadvantage1")}
                </span>
              </p>
            </div>
            <div className={styles["advantages-column"]}>
              <p className={`${styles["advantages-heading"]} font-murecho`}>
                {t("gaploHeading")}
              </p>
              <p className={`${styles["advantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/check.png")} />
                  {t("gaploAdvantage1")}
                </span>
              </p>
              <p className={`${styles["advantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/check.png")} />
                  {t("gaploAdvantage2")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/cross.png")} />
                  {t("gaploDisadvantage1")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/cross.png")} />
                  {t("gaploDisadvantage2")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} font-murecho`}>
                <span className={styles["advantage-span"]}>
                  <img alt="" className={styles["advantage-icon"]} src={publicAsset("/mining-aplo/cross.png")} />
                  {t("gaploDisadvantage3")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} font-murecho`}>
            {t("hardwareHeading")}
          </p>
          <p className={`${styles["section-text"]} font-murecho`}>
            {t("hardwareText")}
          </p>
          <p className={`${styles["section-heading"]} font-murecho`}>
            {t("softwareHeading")}
          </p>
          <p className={`${styles["section-text"]} font-murecho`}>
            {t("softwareText")}
          </p>
          <div className={styles["advantages-paragraph"]}>
            <p className={`${styles["section-link"]} font-murecho`}>
              <Link href={""}>
                <span className={styles["section-link-span"]}>
                  {t("xmrigLinkText")}
                  <img alt="" className={styles["section-link-icon"]} src={publicAsset("/mining-aplo/main-icon.png")} />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} font-murecho`}>
            {t("supportHeading")}
          </p>
          <p className={`${styles["section-text"]} font-murecho`}>
            {t("supportText")}
          </p>
          <p className={`${styles["section-text"]} font-murecho flex`} style={{ marginTop: "-25px" }}>
            {t("supportText2")}{" "}
            <Link href={""}>
              <span className={`${styles["section-link-span"]} ${styles["text-marging"]}`}>
                {t("matrix")}
                <img alt="" className={styles["section-link-icon"]} src={publicAsset("/mining-aplo/main-icon.png")} />
              </span>
            </Link>
            {` ${t("and")} `}
            <Link href={""}>
              <span className={`${styles["section-link-span"]} ${styles["text-marging"]}`}>
                {t("libera")}
                <img alt="" className={styles["section-link-icon"]} src={publicAsset("/mining-aplo/main-icon.png")} />
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
