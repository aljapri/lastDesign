"use client"
import ContactUs from '@/components/shared/ContactUsComponets'
import SocilaMedia from '@/components/shared/SocilaMedia'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';
import ContactUsComponets from '@/components/shared/ContactUsComponets'
export default function Page() {
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en";
  const messages = currentLanguage === "ar" ? arMessages : enMessages;
  const contactMessages = messages.contactUs;

  return (
    <>
      <ContactUsComponets/>
    </>
  )
}
