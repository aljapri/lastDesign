"use client"
import Footer from '@/components/Footer';
import Header from '@/components/SlideBar/Header';
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
        <Header/>
        <div className='mb-10 w-full h-10'></div>
            {children}
        <Footer/>
    </>
  )
}
