"use client";
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';

export default function QualityPolicy() {
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arMessages : enMessages; // Select the appropriate messages
  
  // Set text direction based on language
  const textDirection = currentLanguage === "ar" ? "rtl" : "ltr";

  return (
    <div 
      className={`min-h-screen bg-gray-100 flex items-center justify-center dark:bg-darkBackground dark:text-white text-center`} 
      dir={textDirection} // Set text direction dynamically
    >
      <Head>
        <title>{messages.qualityPolicy.title}</title>
      </Head>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl dark:bg-darkBlue text-right dark:text-white">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6 dark:text-white" >
          {messages.qualityPolicy.header} 
        </h1>
        <p className="text-gray-700 mb-4 leading-relaxed dark:text-white" dir='ltr'>
          {messages.qualityPolicy.commitmentsTitle}
        </p>
        <ul className="list-none list-inside mb-4 text-gray-700 dark:text-white">
          {messages.qualityPolicy.commitments.map((commitment, index) => (
            <li key={index}>{commitment}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-green-600 dark:text-white mb-4">
          {messages.qualityPolicy.foodSafetyTitle}
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed dark:text-white">
          {messages.qualityPolicy.foodSafetyContent}
        </p>
        <p className="text-gray-700 leading-relaxed dark:text-white">
          {messages.qualityPolicy.foodSafetyContentAdditional}
        </p>
      </div>
    </div>
  );
}
