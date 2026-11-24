"use client";
import dynamic from 'next/dynamic';
import { useIsMobile } from "@/hooks/use-mobile";

const MobileNavigation = dynamic(() => import('./MobileNavigation'));
const DesktopNavigation = dynamic(() => import('./DesktopNavigation'));

export default function Navigation() {
    return useIsMobile() ? <MobileNavigation /> : <DesktopNavigation />;
}
