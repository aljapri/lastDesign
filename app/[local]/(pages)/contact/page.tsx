"use client"
import ContactUs from '@/components/ContactUs'
import SocilaMedia from '@/components/shared/SocilaMedia'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';
export default function Page() {
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en";
  const messages = currentLanguage === "ar" ? arMessages : enMessages;
  const contactMessages = messages.contactUs;

  return (
<div className="  py-12 flex flex-col md:px-28 dark:text-white  " 
    >
        <Head>
        <title>{contactMessages.title} | شذا الشام</title>
      </Head>
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10 max-w-lg">
          <h1 className="text-4xl font-bold mb-3 text-gray-800 dark:text-white">
            {contactMessages.title}
          </h1>
          <p className="text-gray-600 dark:text-white">
            {contactMessages.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="bg-primary dark:bg-[#0D1B2A] text-white flex flex-col justify-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.title}
            </h5>
            <p className="mb-4 ">
              <FaPhoneAlt className="inline-block mr-3" />
              {contactMessages.phone}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.emailLabel}
            </h5>
            <p className="mb-4">
              <FaEnvelope className="inline-block mr-3" />
              {contactMessages.email}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.address}
            </h5>
            <p className="mb-4 ">
              <FaMapMarkerAlt className="inline-block mr-3" />
              {contactMessages.address1}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.followUs}
            </h5>
            <div className="flex space-x-2 mt-2">
              <SocilaMedia />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="mb-4 text-gray-700 dark:text-white" dangerouslySetInnerHTML={{ __html: contactMessages.contactForm }} />
            <form>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700 dark:text-white">
                    {contactMessages.name}
                  </label>
                  <input type="text" id="name" className="border border-gray-300 p-3 rounded-md" placeholder={contactMessages.name} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-700 dark:text-white">
                    {contactMessages.emailLabel}
                  </label>
                  <input type="email" id="email" className="border border-gray-300 p-3 rounded-md" placeholder={contactMessages.emailLabel} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-gray-700 dark:text-white">
                    {contactMessages.subject}
                  </label>
                  <input type="text" id="subject" className="border border-gray-300 p-3 rounded-md" placeholder={contactMessages.subject} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-700 dark:text-white">
                    {contactMessages.message}
                  </label>
                  <textarea id="message" className="border border-gray-300 p-3 rounded-md" placeholder={contactMessages.message} rows={8}></textarea>
                </div>
                <button type="submit" className="bg-primary dark:bg-[#0D1B2A] text-white py-3 px-5 rounded-md hover:bg-green-700">
                  {contactMessages.sendMessage}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
