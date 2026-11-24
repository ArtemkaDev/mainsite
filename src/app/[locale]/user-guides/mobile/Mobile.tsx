import { publicAsset } from "@/lib/public-asset";
import {useTranslations} from "next-intl";
import styles from "./mobile.module.css";
import Link from "next/link";

export default function Mobile() {
    const t = useTranslations('UserGuide');

    return (
        <>
            <p className={`${styles["page-heading"]} font-murecho`}>{t('pageHeading')}</p>
            <section className={styles["main-container"]}>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('general')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.createPaperWallet')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.makePayment')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.provePayment')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.joinMatrixServer')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('mining')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('miningLinks.mineOnPool')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('miningLinks.soloMine')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('backup')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('backupLinks.offlineBackup')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('nodeAndSync')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('nodeAndSyncLinks.connectRemoteNode')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('nodeAndSyncLinks.importBlockchain')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('nodeAndSyncLinks.runNodeVPS')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('recovery')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('recoveryLinks.fixLockedFunds')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('recoveryLinks.restoreFromKeys')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('recoveryLinks.restoreFromSeed')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('wallets')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.cliWalletGuide')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.guiWalletGuide')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.changeRestoreHeight')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.viewOnlyWallet')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.scanMissingTransaction')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.verifySoftwareCLI')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.verifySoftwareWindows')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.multisigTransactions')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('hardwareWallets')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('hardwareWalletsLinks.useLedger')}<img alt="" className={styles["guides-link-image"]} src={publicAsset("/user-guides/main-icon.png")}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} font-murecho`}>{t('anonymizingNetworks')}</p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.connectTor')}<img alt="" className={styles["guides-link-image2"]} src={publicAsset("/user-guides/onion-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.runNodeI2P')}<img alt="" className={styles["guides-link-image2"]} src={publicAsset("/user-guides/onion-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.useCLIWithQubesWhonix')}<img alt="" className={styles["guides-link-image2"]} src={publicAsset("/user-guides/onion-icon.png")}/></span></Link></p>
                    <p className={`${styles["guide-link"]} font-murecho`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.useTails')}<img alt="" className={styles["guides-link-image2"]} src={publicAsset("/user-guides/onion-icon.png")}/></span></Link></p>
                </div>
            </section>
        </>
    )
}
