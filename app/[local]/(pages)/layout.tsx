"use client"
import Footer from '@/components/Footer';
import DarkModeToggle from '@/components/shared/DarkModeToggle';
import WhatsApp from '@/components/shared/WhatsApp';
import Header from '@/components/SlideBar/Header';
import React, { useEffect, useState } from 'react'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    useEffect(() => {
      // Check if the page was fully reloaded
        setIsPageLoaded(true);
      
    }, []);
    if (!isPageLoaded) {
      return <div className="w-full flex flex-row justify-center items-center h-screen">Loading...</div>; // Optional loading indicator
    }
  return (
    <>
      <div className=' dark:bg-darkBackground'>
                <Header/>
        <div className='mb-10 w-full h-10'></div>
            {children}
            <DarkModeToggle/>
            <WhatsApp/>
        <Footer/>
      </div>

    </>
  )
}
