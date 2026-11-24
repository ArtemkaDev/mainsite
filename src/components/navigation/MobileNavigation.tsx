import { publicAsset } from "@/lib/public-asset";
import { useState } from "react";
import { Button } from "@ui-sdk/react/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/react/drawer";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../language/LanguageSwitcher";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const APLO_NETWORK = {
  chainId: "0x6e7a", // 28282 in hex
  chainName: "Aplo Network",
  rpcUrls: ["https://pub1.aplocoin.com"],
  nativeCurrency: {
    name: "GAPLO",
    symbol: "GAPLO",
    decimals: 18,
  },
  blockExplorerUrls: [
    "https://explorer.aplocoin.com"
  ]
};
export default function MobileNavigation() {
  const t = useTranslations("Menu");
  const [open, setOpen] = useState(false);

  const lang = useLocale();

  const closeMenu = () => setOpen(false);

  const { toast } = useToast();

  const addAploNetwork = async () => {
    try {
      if (!window.ethereum) return;
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [APLO_NETWORK],
      });
      toast({
        title: t("success"),
        description: t("networkAdded"),
      });
    } catch (err: unknown) {
      const error = err as Error;
      toast({
        variant: "destructive",
        title: t("error"),
        description: error.message,
      });
    }
  };

  const getCurrentChainId = async () => {
    try {
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      return chainId;
    } catch (err) {
      return null;
    }
  };

  const switchToAploNetwork = async () => {
    try {
      if (!window.ethereum) return false;

      const currentChainId = await getCurrentChainId();
      if (currentChainId === APLO_NETWORK.chainId) return true;

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: APLO_NETWORK.chainId }],
      });

      toast({
        title: t("success"),
        description: t("networkSwitched"),
      });
      return true;
    } catch (err: unknown) {
      // Error code 4902 means the chain hasn't been added yet
      if ((err as any).code === 4902) {
        try {
          await addAploNetwork();
          // Try switching again after adding network
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: APLO_NETWORK.chainId }],
          });
          return true;
        } catch (addErr: unknown) {
          const error = addErr as Error;
          toast({
            variant: "destructive",
            title: t("error"),
            description: error.message,
          });
          return false;
        }
      }
      const error = err as Error;
      toast({
        variant: "destructive",
        title: t("error"),
        description: error.message,
      });
      return false;
    }
  };

  const addToken = async (contractId: string, name: string) => {
    try {
      if (!window.ethereum) return;

      // Verify and switch to Aplo network first
      const switched = await switchToAploNetwork();
      if (!switched) {
        toast({
          variant: "destructive",
          title: t("error"),
          description: t("switchNetworkFirst"),
        });
        return;
      }

      // Double check we're on the right network
      const currentChainId = await getCurrentChainId();
      if (currentChainId !== APLO_NETWORK.chainId) {
        toast({
          variant: "destructive",
          title: t("error"),
          description: t("wrongNetwork"),
        });
        return;
      }

      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: contractId,
            symbol: name,
            decimals: 18,
          },
        },
      });

      toast({
        title: t("success"),
        description: t("tokenAdded"),
      });
    } catch (err: unknown) {
      const error = err as Error;
      toast({
        variant: "destructive",
        title: t("error"),
        description: error.message,
      });
    }
  };

  const menuItems = [
    { title: t("whatIsAplo"), url: `/${lang}/what-is-aplo` },
    { title: t("mining"), url: `/${lang}/mining-aplo` },
    { title: t("faq"), url: `/${lang}/faq` },
    { title: t("about"), url: `/${lang}/about-aplo` },
    { title: t("roadmap"), url: `/${lang}/roadmap` },
    { title: t("userGuides"), url: `/${lang}/user-guides` },
  ];

  return (
    <header className="sticky top-0 z-10 mb-[1.35vh] flex w-full items-center justify-between bg-secondary px-[3.73vw]">
      <Link href={`/${lang}`}>
        <Image
          src={publicAsset("/menu/logo.png")}
          width={6}
          height={3}
          alt="AploCoin logo"
          className="w-[12.8vw] h-auto p-1"
        />
      </Link>
      <Drawer side="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger aria-label={t("openMenu")} className="px-2">
          <Image
            src={publicAsset("/menu/menu-m.svg")}
            width={24}
            height={16}
            alt=""
            className="w-[7vw]"
          />
        </DrawerTrigger>
        <DrawerBackdrop />
        <DrawerContent className="!w-[min(100%,360px)] overflow-y-auto">
          <DrawerTitle className="sr-only">{t("openMenu")}</DrawerTitle>
          <div className="flex items-center gap-3">
            <LanguageSwitcher onChange={closeMenu} />
            <ThemeSwitcher />
            <DrawerClose data-variant="outline" aria-label={t("closeMenu")} className="ml-auto w-10 justify-center">
              <X className="h-5 w-5" aria-hidden="true" />
            </DrawerClose>
          </div>
          <nav className="grid gap-3">
            <Button
              data-variant="solid"
              render={<Link href={`/${lang}/donate-aplo-project`} onClick={closeMenu} />}
            >
              {t("donate")}
            </Button>
            {menuItems.map((item) => (
              <Button
                key={item.url}
                data-variant="outline"
                render={<Link href={item.url} onClick={closeMenu} />}
              >
                {item.title}
              </Button>
            ))}
          </nav>
          <div className="grid gap-3">
            <Button
              data-variant="outline"
              onClick={addAploNetwork}
            >
              {t("addNetwork")}
            </Button>
            <Button
              data-variant="outline"
              onClick={() => {
                addToken(
                  "0x0000000000000000000000000000000000001235",
                  "APLO"
                );
              }}
            >
              {t("addAploToken")}
            </Button>
            <Button
              data-variant="outline"
              onClick={() => {
                addToken(
                  "0x0000000000000000000000000000000000001234",
                  "GAPLO"
                );
              }}
            >
              {t("addGaploToken")}
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
