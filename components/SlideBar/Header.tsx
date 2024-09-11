"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { TfiAlignJustify } from "react-icons/tfi";
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";
import Link from "next/link";
import { MdOutlineLanguage } from "react-icons/md";

export default function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arMessages : enMessages; // Select the appropriate messages
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle language change
  const handleLanguageChange = (e: any) => {
    const newLanguage = e.target.value;
    const path = pathName.slice(3); // Get the rest of the path excluding language
    const newPath = `/${newLanguage}/${path}`; // Construct new path with selected language
    router.push(newPath);
  };

  const handleLinkChange = (menuLink: string) => {
    const newLink = `/${currentLanguage}/${menuLink}`;
    router.push(newLink);
  };

  return (
    <header className="bg-white dark:bg-darkBackground shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl font-bold text-gray-900 dark:text-white flex flex-row justify-center items-center "
        >
          <Image src={"/logo.png"} width={100} className="sm:w-[100px] w-[50px]" height={70} alt="logo" />
          <span className="text-green-800 logoFont sm:text-2xl text-xl">
            {messages.logo_name.first}
          </span>{" "}
          <span className="text-orange-800 logoFont  sm:text-2xl text-xl">
            {messages.logo_name.second}
          </span>
        </Link>

        {/* Menu */}
        <nav>
          <ul className="hidden xl:flex space-x-6">
            {messages.menus.map((menu, index) => (
              <li
                key={menu.link}
                onClick={() => handleLinkChange(menu.link)}
                className="list-none cursor-pointer text-gray-900 dark:text-gray-200 hover:text-blue-600"
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Selector */}
        <div className="relative flex flex-row justify-center items-center space-x-2 sm:text-xl text-sm ">
        <MdOutlineLanguage size={25} className="dark:text-white text-dark"/>
          <select
            title="language"
            onChange={handleLanguageChange}
            value={currentLanguage} // Bind to current language
            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1"
          >
            <option value="ar">{messages.languages.ar}</option>
            <option value="en">{messages.languages.en}</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-4 text-gray-900 dark:text-white"
          title={messages.phone}
        >
          <TfiAlignJustify
            size={20}
            cursor="pointer"
            className="dark:text-white"
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
          <ul className="xl:hidden bg-white px-5 dark:bg-darkBackground shadow-md flex flex-col-reverse">
            {messages.menus.map((menu, index) => (
              <li
                key={menu.link}
                onClick={() => handleLinkChange(menu.link)}
                className="list-none mb-5 cursor-pointer text-gray-900 dark:text-gray-200 hover:text-blue-600"
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
