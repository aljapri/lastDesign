"use client";

import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import WhatsApp from "@/components/shared/WhatsApp";
import SlideBar from "@/components/SlideBar";
import Types from "@/components/Types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Home() {

  return (
    <>
    <SlideBar/>
    <AboutUs/>
    <Types/>
    <ContactUs/>
    <Location/>
    <Footer/>
    <WhatsApp/>
    {/* <div className="container-fluid bg-dark footer  pt-5 wow fadeIn footer__section text-light " data-wow-delay="0.1s">
    <div className="container mx-auto py-5">
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1">
            <h1 className="font-bold text-primary mb-4 text-3xl">Shaza<span className="text-secondary">Alsham</span></h1>
            <p>شذا الشام هي شركة متخصصة في تقديم أجود المواد الغذائية المحلية، ملتزمون بتوفير منتجات عالية الجودة تلبّي احتياجات عملائنا.</p>
            <div className="flex pt-2 space-x-2">
                <a className="btn btn-square btn-outline-light rounded-full" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square btn-outline-light rounded-full" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square btn-outline-light rounded-full" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-square btn-outline-light rounded-full" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div className="col-span-1 text-light">
            <h4 className="text-light mb-4 text-lg font-medium">Address</h4>
            <p><i className="fa fa-map-marker-alt mr-3"></i>123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt mr-3"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope mr-3"></i>info@example.com</p>
        </div>
        <div className="col-span-1">
            <h4 className="text-light mb-4 text-lg font-medium">Quick Links</h4>
            <a className="text-link hover:text-blue-500 block" href="index.html">Home</a>
            <a className="text-link hover:text-blue-500 block" href="about.html">About Us</a>
            <a className="text-link hover:text-blue-500 block" href="contact.html">Contact Us</a>
            <a className="text-link hover:text-blue-500 block" href="product.html">Products</a>
        </div>
        <div className="col-span-1">
            <h4 className="text-light mb-4 text-lg font-medium">Socila Media</h4>
            
        </div>
    </div>
</div>
<div className="container-fluid bg-gray-900 text-white py-3 flex justify-center items-center">
    <div className="container mx-auto text-center">
        <div className="grid md:grid-cols-2 gap-3">
            <div className="text-center md:text-left flex justify-center items-center">
                &copy; <a href="#" className="text-primary">ShazaAlsham</a>.
            </div>
        </div>
    </div>
</div>

    </div> */}
        </>
  );
}
