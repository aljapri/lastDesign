"use client"
import Footer from '@/components/Footer';
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
        <Header/>
        <div className='mb-10 w-full h-10'></div>
            {children}
        <Footer/>
    </>
  )
}
