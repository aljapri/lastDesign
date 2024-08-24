import React from "react";
import SocilaMedia from "./shared/SocilaMedia";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SectionWrapper } from "@/hoc";
import {motion} from "framer-motion"
import { fadeIn, slideIn } from "@/utils/motion";
 function ContactUs() {
  return (
    <motion.div className="  py-12 flex flex-col md:px-28  " 
    variants={fadeIn("down", "tween", 0.2, 1)}

    >
        
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="text-3xl font-bold mb-3">اتصل بنا</h1>
        <p className="text-gray-700">
          إذا كان لديك أي استفسارات أو تحتاج إلى دعم، لا تتردد في الاتصال بنا.
          نحن هنا لمساعدتك وتلبية جميع احتياجاتك.
        </p>
      </div>
      <div className="flex flex-col  gap-10 justify-center ">
        <div className="bg-primary text-white flex flex-col justify-center h-full p-8">
          <h5 className="font-semibold mb-4">اتصل بنا</h5>
          <p className="mb-5">
            <FaPhoneAlt className="inline-block mr-3" />
            +012 345 67890
          </p>

          <h5 className="font-semibold mb-4">أرسل لنا بريدًا إلكترونيًا</h5>
          <p className="mb-5">
            <FaEnvelope className="inline-block mr-3" />
            info@example.com
          </p>

          <h5 className="font-semibold mb-4">عنوان المكتب</h5>
          <p className="mb-5">
            <FaMapMarkerAlt className="inline-block mr-3" />
            123 شارع، نيويورك، الولايات المتحدة
          </p>

          <h5 className="font-semibold mb-4">تابعنا</h5>
          <SocilaMedia />
        </div>

      </div>
    </motion.div>
  );
}

export default SectionWrapper(ContactUs,"aboutSection");
