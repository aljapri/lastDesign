"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import { TfiAlignJustify } from "react-icons/tfi";
import { link } from "fs";
import Link from "next/link";
import { useRouter } from 'next/navigation'

function Header() {
  const [active, setActive] = React.useState(-1);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 font-medium uppercase opacity-90 md:px-10 text-xl">
      <Head>
        <title>Cool Project</title>
      </Head>
      <div className="flex items-center gap-2 font-medium tracking-[4px] text-2xl">
        <span className="text-green-800">Shaza</span>{" "}
        <span className="text-orange-800">Alsham</span>
      </div>
      <div
        className="xl:hidden"
        onClick={() => setIsOpen((el) => !el)}
      >
        <TfiAlignJustify size={20} cursor={"pointer"} className="dark:text-white" />
      </div>
      <ul className="xl:navbar hidden">
        {menus.map((menu, index) => (
          <Link href={`${menu.ll ? "/ar/" : "#"}${menu.link}`} key={index} legacyBehavior>
            <a onClick={() => setActive(index)} className="text-sm font-bold">
              <motion.li
                layout
                className={`${
                  active === index && "border-b-2 border-b-primary"
                } inline-block cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
              >
                {menu.name}
              </motion.li>
            </a>
          </Link>
        ))}
      </ul>
    </div>

    {isOpen && (
      <ul className="absolute w-full flex flex-col-reverse space-y-3 mt-20 px-11 py-10 bg-white text-black z-40 xl:hidden dark:bg-darkBackground dark:text-white">
        {menus.map((menu, index) => (
          <Link href={`${menu.ll ? "/ar/" : "#"}${menu.link}`} key={index} legacyBehavior>
            <a
              onClick={() => {
                setActive(index);
                setIsOpen(false);
              }}
              className="font-bold"
            >
              <motion.li
                layout
                className={`${
                  active === index && "border-b-2 border-b-primary"
                } inline-block cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:text-primary`}
              >
                {menu.name}
              </motion.li>
            </a>
          </Link>
        ))}
      </ul>
    )}
  </>
  );
}

export default Header;

const menus = [
  {
    name:"أنجليزي",
    link:"en",
    ll:true,

  },
  {
    name:"عربي",
    link:"ar",
    ll:true,
  },
  {
    name: "شهادة الحلال ",
    link: "certificate",
    ll:true,

  },
  {
    name: "ادارة الشركه",
    link: "companyManager",
    ll:true,

  },
  {
    name: "فرص العمل",
    link: "works",
    ll:true,

  },
  {
    name:"شذى الشام ماركت",
    link:"market",
    ll:true,

  },
  {
    name:"سياسة الجودة",
    link:"privacy&quality",
    ll:true,

  },
  {
    name: "تواصل معنا ",
    link: "contact",
    ll:true,

  },
  {
    name: "منتجاتنا",
    link: "products",
    ll:true,

  },
  {
    name: "من نحن",
    link: "aboutUs",
    ll:false,

  },
  {
    name: "الصفحة الرئيسية",
    link: "",
    ll:true,

  },
];



const language = [
  {
    name:"أنجليزي",
    link:"en"
  },
  {
    name:"عربي",
    link:"ar"
  }
]



const links = [
  {
    name: "عملائنا",
    link: "ourClients",
  },
  {
    name: "شهادة الحلال ",
    link: "certificate",
  },
  {
    name: "ادارة الشركه",
    link: "companyManager",
  },
  {
    name: "فرص العمل",
    link: "works",
  },
  {
    name:"الدرة ماركت",
    link:"market"
  },
  {
    name:"سياسة الجودة",
    link:"privacy&quality"
  }
];

/**
 

  " عملائنا",
  "شهادة الحلال ",
  "ادارة الشركه",
  "فرص العمل",
  "الدرة ماركت",
  "سياسة الجودة",
 
 */
