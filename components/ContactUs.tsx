import React from "react";
import SocilaMedia from "./shared/SocilaMedia";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SectionWrapper } from "@/hoc";
import Head from 'next/head';
import {motion} from "framer-motion"
import { fadeIn, slideIn } from "@/utils/motion";
 function ContactUs() {
  return (
    <motion.div className="  py-12 flex flex-col md:px-28  " 
    variants={fadeIn("down", "tween", 0.2, 1)}
    id="contactUs"
    
    >
        
        <Head>
        <title>اتصل بنا | شذا الشام</title>
      </Head>
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10 max-w-lg">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">اتصل بنا</h1>
          <p className="text-gray-600">إذا كان لديك أي استفسارات أو تحتاج إلى دعم، لا تتردد في الاتصال بنا. نحن هنا لمساعدتك وتلبية جميع احتياجاتك.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="bg-primary text-white flex flex-col justify-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h5 className="text-xl font-semibold mb-2">اتصل بنا</h5>
            <p className="mb-4">            <FaPhoneAlt className="inline-block mr-3" />
            +012 345 67890</p>
            <h5 className="text-xl font-semibold mb-2">أرسل لنا بريدًا إلكترونيًا</h5>
            <p className="mb-4">            <FaEnvelope className="inline-block mr-3" />
            info@example.com</p>
            <h5 className="text-xl font-semibold mb-2">عنوان المكتب</h5>
            <p className="mb-4">            <FaMapMarkerAlt className="inline-block mr-3" />
            23 شارع، نيويورك، الولايات المتحدة</p>
            <h5 className="text-xl font-semibold mb-2">تابعنا</h5>
            <div className="flex space-x-2 mt-2">
              <SocilaMedia/>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="mb-4 text-gray-700">نموذج الاتصال غير مفعل حاليًا. احصل على نموذج اتصال فعال وقابل للعمل باستخدام Ajax و PHP في بضع دقائق فقط. ما عليك سوى نسخ ولصق الملفات، وإضافة بعض الشيفرات، وانتهى الأمر. <a className="text-blue-600 underline" href="https://htmlcodex.com/contact-form">قم بالتنزيل الآن</a>.</p>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700">اسمك</label>
                  <input type="text" id="name" className="border border-gray-300 p-3 rounded-md" placeholder="اسمك" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-700">بريدك الإلكتروني</label>
                  <input type="email" id="email" className="border border-gray-300 p-3 rounded-md" placeholder="بريدك الإلكتروني" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-gray-700">الموضوع</label>
                  <input type="text" id="subject" className="border border-gray-300 p-3 rounded-md" placeholder="الموضوع" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-700">الرسالة</label>
                  <textarea id="message" className="border border-gray-300 p-3 rounded-md" placeholder="اترك رسالتك هنا" rows={8}></textarea>
                </div>
                <button type="submit" className="bg-primary text-white py-3 px-5 rounded-md hover:bg-green-700">أرسل الرسالة</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SectionWrapper(ContactUs,"ContactUs");
