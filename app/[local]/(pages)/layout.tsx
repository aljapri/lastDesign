"use client"
import Footer from '@/components/Footer';
import DarkModeToggle from '@/components/shared/DarkModeToggle';
import WhatsApp from '@/components/shared/WhatsApp';
import Header from '@/components/SlideBar/Header';
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import { OrbitProgress } from 'react-loading-indicators';
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
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
    <>
      <div className=' dark:bg-darkBackground' dir={`${pathName.split("/")[1] == 'ar' ? "rtl" : "ltr"}`}>
                <Header/>
        <div className='mb-10 w-full h-10'></div>
            <div >
            {children}
            </div>
            <DarkModeToggle/>
            <WhatsApp/>
        <Footer/>
      </div>

    </>
  )
}
