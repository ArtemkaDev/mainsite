"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import dynamic from "next/dynamic";

const DesktopPage = dynamic(() => import('./desktop/Desktop'));
const MobilePage = dynamic(() => import('./mobile/Mobile'));

export default function Home() {
    return useIsMobile() ? <MobilePage /> : <DesktopPage />;
}
