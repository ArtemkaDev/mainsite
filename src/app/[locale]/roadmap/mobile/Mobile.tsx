import { publicAsset } from "@/lib/public-asset";
import {useTranslations} from "next-intl";
import styles from "./mobile.module.css";
import Link from "next/link";

export default function Mobile() {
    const t = useTranslations("Roadmap");
    return (
        <>
            <p className={`${styles["page-heading"]} font-murecho`}>{t('title')}</p>
            <div className={styles["roadmap-remarks"]}>
                <p className={`${styles["roadmap-remark"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")}/>{t('completed')}</span></p>
                <p className={`${styles["roadmap-remark"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/ongoing.png")}/>{t('onGoing')}</span></p>
                <p className={`${styles["roadmap-remark"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")}/>{t('upComing')}</span></p>
            </div>
            <section className={styles["roadmap-section"]}>
                <p className={`${styles["roadmap-year"]} font-murecho`}>2022</p>
                <p className={`${styles["roadmap-month"]} font-murecho`}>April</p>
                <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")}/>Completed task</span></p>
                <p className={`${styles["roadmap-task"]} ${styles["link-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")}/><Link className={styles["remark-link"]} href={""}>Upcoming Task Link</Link> <img alt="" className={styles["remark-link-icon"]} src={publicAsset("/roadmap/link-icon.png")}/></span></p>
                <p className={`${styles["roadmap-year"]} font-murecho`}>2023</p>
                <p className={`${styles["roadmap-month"]} font-murecho`}>March</p>
                <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")}/>Completed task</span></p>
                <p className={`${styles["roadmap-task"]} ${styles["link-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")}/><Link className={styles["remark-link"]} href={""}>Upcoming Task Link</Link> <img alt="" className={styles["remark-link-icon"]} src={publicAsset("/roadmap/link-icon.png")}/></span></p>
            </section>
        </>
    );
}