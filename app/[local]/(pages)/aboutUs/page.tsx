"use client"
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";
import Image from 'next/image';

export default function About() {
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arMessages : enMessages; // Select the appropriate messages

  return (
    <div className="min-h-screen bg-gray-100 py-10 dark:bg-darkBackground dark:text-white rtl:pref">
      <Head>
        <title>{messages.about.title}</title>
      </Head>
      <div className="container mx-auto px-10 ">
        <h1 className="text-4xl font-bold text-center dark:text-white text-green-700 mb-10 w-full flex flex-row justify-center items-center dark:opacity-50">
          <Image src={"/logo.png"} alt='shaza alsham' width={300} height={200} />
        </h1>

        <section className=" ">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">{messages.about.sections.whoWeAre.title}</h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.whoWeAre.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">{messages.about.sections.vision.title}</h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.vision.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">{messages.about.sections.mission.title}</h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.mission.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">{messages.about.sections.values.title}</h2>
          <ul className="list-disc dark:text-white list-inside text-gray-700 leading-relaxed">
            {messages.about.sections.values.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">{messages.about.sections.history.title}</h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.history.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white text-green-600 mb-4">{messages.about.sections.services.title}</h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            {messages.about.sections.services.content}
          </p>
        </section>
      </div>
    </div>
  );
}
