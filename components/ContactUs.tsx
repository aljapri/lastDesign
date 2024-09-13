import React from "react";
import SocilaMedia from "./shared/SocilaMedia";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SectionWrapper } from "@/hoc";
import Head from 'next/head';
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { usePathname } from "next/navigation";
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';
import ContactUsComponets from "./shared/ContactUsComponets";

const ContactUs = () => {


  return (
    <>
      <ContactUsComponets/>
    </>
  );
};

export default SectionWrapper(ContactUs, "ContactUs");
