import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import { TfiAlignJustify } from "react-icons/tfi";
import { link } from "fs";
import Link from "next/link";

function Header() {
  const [active, setActive] = React.useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5  font-medium uppercase opacity-90 md:px-10 text-xl">
        <Head>
          <title>Cool Project</title>
        </Head>
        <div className="  flex items-center gap-2 font-medium tracking-[4px] text-2xl">
          <span className="text-green-800">Shaza</span>{" "}
          <span className="text-orange-800">Alsham</span>
        </div>
        <div
          className="xl:hidden "
          onClick={() => {
            setIsOpen((el) => {
              return !el;
            });
          }}
        >
          <TfiAlignJustify size={20} cursor={"pointer"} />
        </div>
        <ul className="  xl:navbar  hidden  ">
          {menus.map((menu, index) => {
            
            return (
              <a href={`${menu.ll ? "/" : "#"}${menu.link}`} key={index} onClick={()=>{
                setActive(index);
              }} className="text-sm font-bold"  >
                <motion.li
                  layout
                  className={` ${
                    active == index && " border-b-2 border-b-primary"
                  } inline-block cursor-pointer  border-b-primary transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
                >
                  {menu.name}
                </motion.li>
              </a>
            );
          })}
            
        </ul>
        
      </div>
      {isOpen && (
        <ul className=" w-full  absolute  xl:hidden  flex  flex-col-reverse bg  space-y-3 mt-20 px-11 bg-white text-black z-40 py-10">
          {menus.map((menu, index) => {
            return (
              <a key={index} href={` ${menu.ll ? "/" : "#"}${menu.link}`} onClick={()=>{
                setActive(index);
                setIsOpen(false);
                }} className="font-bold">
                <motion.li
                  layout
                  className={` ${
                    active == index && " border-b-2 border-b-primary"
                  } inline-block cursor-pointer  border-b-primary transition duration-300 ease-in-out hover:border-b-2 hover:text-primary`}
                >
                  {menu.name}
                </motion.li>
              </a>
            );
          })}
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
    name: "اتصل بنا",
    link: "contactUs",
    ll:false,

  },
  {
    name: "منتجاتنا",
    link: "products",
    ll:false,

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
