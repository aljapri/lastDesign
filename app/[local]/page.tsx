"use client";

import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import DarkModeToggle from "@/components/shared/DarkModeToggle";
import WhatsApp from "@/components/shared/WhatsApp";
import SlideBar from "@/components/SlideBar";
import Types from "@/components/Types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const pathName = usePathname();

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    useEffect(() => {
      // Check if the page was fully reloaded
        setIsPageLoaded(true);
      
    }, []);
    if (!isPageLoaded) {
      return <div className="w-full flex flex-row justify-center items-center h-screen">Loading...</div>; // Optional loading indicator
    }
  return (
<div className="dark:bg-darkBackground " dir={pathName.split("/")[1] == "ar"?"rtl":"ltr"} >
<SlideBar/>
    <AboutUs/>
    <Types/>
    <ContactUs/>
    <Location/>
    <Footer/>
    <WhatsApp/>
    <DarkModeToggle/>
</div>

  );
}
