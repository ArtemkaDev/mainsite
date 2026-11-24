"use client";
import { publicAsset } from "@/lib/public-asset";

import { useTranslations } from "next-intl";
import styles from "./desktop.module.css";
import Link from "next/link";
import { useRef, useState, MutableRefObject } from "react";


export default function Desktop() {
    const t = useTranslations("Roadmap");
    const liRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [activatedYear, setActivatedYear] = useState<string | null>(null);
    const [activatedIndex, setActivatedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        const clickedElement = liRefs.current[index];
        if (clickedElement) {
            const yearText = clickedElement.querySelector('p')?.textContent;
            setActivatedYear(yearText || null);
            setActivatedIndex(index);
            console.log(yearText)
        }
    };

    return (
        <>
            <p className={`${styles["page-heading"]} font-murecho`}>{t('title')}</p>
            <div className={styles["roadmap-remarks"]}>
                <p className={`${styles["roadmap-remark"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")} />{t('completed')}</span></p>
                <p className={`${styles["roadmap-remark"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/ongoing.png")} />{t('onGoing')}</span></p>
                <p className={`${styles["roadmap-remark"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")} />{t('upComing')}</span></p>
            </div>
            <section className={styles["menu-container"]}>
                <ul className={styles["roadmap-buttons"]}>
                    {['2019', '2020', '2021', '2022', '2023', 'Future'].map((year, index) => (
                        <li
                            key={index}
                            ref={(el) => { liRefs.current[index] = el }}
                            onClick={() => handleClick(index)}
                            className={`${styles["roadmap-category"]} ${activatedIndex === index ? styles["activated"] : ''}`}>
                            <p className={`${styles["category-year"]} font-murecho`}>{year === 'Future' ? t('future') : year}</p>
                        </li>
                    ))}
                </ul>
            </section>
            {activatedYear &&
                <section className={styles["main-container"]}>
                    <p className={`${styles["year-heading"]} font-murecho`}>{activatedYear}</p>
                    {activatedYear === "2019" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")} /> {t('completed')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/ongoing.png")} /> {t('onGoing')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")} /> {t('upComing')}</span></p>
                        </div>
                    }{activatedYear === "2020" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")} /> {t('completed')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/ongoing.png")} /> {t('onGoing')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")} /> {t('upComing')}</span></p>
                        </div>
                    }{activatedYear === "2021" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")} /> {t('completed')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/ongoing.png")} /> {t('onGoing')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")} /> {t('upComing')}</span></p>
                        </div>
                    }{activatedYear === "2022" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")} /> {t('completed')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/ongoing.png")} /> {t('onGoing')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")} /> {t('upComing')}</span></p>
                        </div>
                    }{activatedYear === "2023" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/completed.png")} /> {t('completed')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/ongoing.png")} /> {t('onGoing')}</span></p>
                            <p className={`${styles["roadmap-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")} /> {t('upComing')}</span></p>
                        </div>
                    }{activatedYear === "Future" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} ${styles["link-task"]} font-murecho`}><span className={styles["remark-span"]}><img alt="" className={styles["remark-icon"]} src={publicAsset("/roadmap/upcoming.png")} /><Link className={styles["remark-link"]} href={""}>Upcoming Task Link</Link> <img alt="" className={styles["remark-link-icon"]} src={publicAsset("/roadmap/link-icon.png")} /></span></p>
                        </div>
                    }
                </section>
            }
        </>
    );
}
