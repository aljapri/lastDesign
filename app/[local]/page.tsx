"use client";
import Popup from "@/components/Card";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import DarkModeToggle from "@/components/shared/DarkModeToggle";
import WhatsApp from "@/components/shared/WhatsApp";
// import SlideBar from "@/components/SlideBar";
import Types from "@/components/Types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useMediaQuery } from "react-responsive";
import Header from '@/components/SlideBar/Header';

export default function Home() {
  const pathName = usePathname();

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    useEffect(() => {
      // Check if the page was fully reloaded
        setIsPageLoaded(true);
      
    }, []);
    if (!isPageLoaded) {
      return <div className="w-full flex flex-row justify-center items-center h-screen">
                <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />

      </div>; // Optional loading indicator
    }
  return (
<div className="dark:bg-darkBackground " dir={pathName.split("/")[1] == "ar"?"rtl":"ltr"} >
{/* <SlideBar/> */}
  <Popup/>
  <Header/>
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
