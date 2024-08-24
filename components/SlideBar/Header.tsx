import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import { TfiAlignJustify } from "react-icons/tfi";


function Header() {
  const [active, setActive] = React.useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5  font-medium uppercase opacity-90 md:px-10 text-xl">
      <Head>
        <title>Cool Project</title>
      </Head>
      <div className="  flex items-center gap-2 font-medium tracking-[4px] text-2xl">
        <span className="text-green-800">Shaza</span> <span className="text-orange-800">Alsham</span>
      </div>
      <div className="xl:hidden " onClick={()=>{
        setIsOpen((el)=>{
          return !el
        })
      }}>
      <TfiAlignJustify size={20} cursor={"pointer"} />
      </div>
      <ul className="  xl:navbar  hidden  ">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && " border-b-2 border-b-primary"
              } inline-block cursor-pointer  border-b-primary transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              {menu}
            </motion.li>
          );
        })}
      </ul>


    </div>
    {isOpen && <ul className=" w-full  absolute  xl:hidden  flex  flex-col bg  space-y-3 mt-20 px-11 bg-white text-black z-40 py-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && " border-b-2 border-b-primary"
              } inline-block cursor-pointer  border-b-primary transition duration-300 ease-in-out hover:border-b-2 hover:text-primary`}
            >
              {menus[(menus.length-1) -index]}
            </motion.li>
          );
        })}
      </ul>}
    </>
  );
}

export default Header;

const menus = [
  " انجليزي",
  " عربي",

  " عملائنا",
  "شهادة الحلال ",

  "ادارة الشركه",
  "فرص العمل",
  "الدرة ماركت",
  "سياسة الجودة",
  "من نحن",
  "اتصل بنا",
  "الصفحة الرئيسية",

];
