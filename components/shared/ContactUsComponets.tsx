import React, { useState } from "react";
import SocilaMedia from "./SocilaMedia";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SectionWrapper } from "@/hoc";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { usePathname } from "next/navigation";
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";

const ContactUsComponents = () => {
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en";
  const messages = currentLanguage === "ar" ? arMessages : enMessages;
  const contactMessages = messages.contactUs;

  const [purchase, setPurchase] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    product: "",
    quantity: "",
    country: "",
    city: "",
    clientAddress: "",
    message: "",
  });

  const handlePurches = (value: string) => {
    if (value === "Purchase" || value === "شراء") {
      setPurchase(true);
    } else {
      setPurchase(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: formData.email, // or dynamically set this
          subject: formData.subject,
          text: formData.message,

          html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p> 
          ${purchase && 
            `<p>product: ${formData.product}</p>
            <p>quantity: ${formData.quantity}</p>
            <p>country: ${formData.country}</p>
            <p>city: ${formData.city}</p>
            <p>Address: ${formData.clientAddress}</p>
            
            `}`,
        }),
      });

      if (response.ok) {
        alert('Email sent successfully');
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          product: "",
          quantity: "",
          country: "",
          city: "",
          clientAddress: "",
          message: "",
        });
      } else {
        const result = await response.json();
        alert(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  return (
    <motion.div
      className="py-12 flex flex-col md:px-28"
      variants={fadeIn("down", "tween", 0.2, 1)}
      id="contactUs"
    >
      <Head>
        <title>{contactMessages.title} | شذا الشام</title>
      </Head>
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10 max-w-lg">
          <h1 className="text-4xl font-bold mb-3 text-gray-800 dark:text-white">
            {contactMessages.title}
          </h1>
          <p className="text-gray-600 dark:text-white">
            {contactMessages.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="bg-primary dark:bg-[#0D1B2A] text-white flex flex-col justify-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.title}
            </h5>
            <p className="mb-4">
              <FaPhoneAlt className="inline-block mr-3 ml-3" />
              {contactMessages.phone}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.emailLabel}
            </h5>
            <p className="mb-4">
              <FaEnvelope className="inline-block mr-3 ml-3" />
              {contactMessages.email}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.address}
            </h5>
            <p className="mb-4">
              <FaMapMarkerAlt className="inline-block mr-3 ml-3" />
              {contactMessages.address1}
            </p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">
              {contactMessages.followUs}
            </h5>
            <div className="flex space-x-2 mt-2 ">
              <SocilaMedia />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p
              className="mb-4 text-gray-700 dark:text-white"
              dangerouslySetInnerHTML={{ __html: contactMessages.contactForm }}
            />
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-gray-700 dark:text-white"
                  >
                    {contactMessages.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={contactMessages.name}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-700 dark:text-white"
                  >
                    {contactMessages.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={contactMessages.emailLabel}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="text-gray-700 dark:text-white"
                  >
                    {contactMessages.subject}
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      handleChange(e);
                      handlePurches(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {pathName.split("/")[1] === "ar" ? (
                      <option value="">اختر الموضوع</option>
                    ) : (
                      <option value="">Choose the subject</option>
                    )}
                    {contactMessages.subjects.map((sub: string) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                  {purchase && (
                    <>
                      <label
                        htmlFor="product"
                        className="text-gray-700 dark:text-white mt-5"
                      >
                        {contactMessages.product}
                      </label>
                      <select
                        id="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {pathName.split("/")[1] === "ar" ? (
                          <option value="">اختر المنتج</option>
                        ) : (
                          <option value="">Choose the product</option>
                        )}
                        {contactMessages.pruchaseProducts.map((sub: string) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                      </select>
                      <div className="flex flex-col">
                        <label
                          htmlFor="quantity"
                          className="text-gray-700 dark:text-white"
                        >
                          {contactMessages.quantity}
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="country"
                          className="text-gray-700 dark:text-white"
                        >
                          {contactMessages.country}
                        </label>
                        <input
                          id="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="city"
                          className="text-gray-700 dark:text-white"
                        >
                          {contactMessages.city}
                        </label>
                        <input
                          id="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="clientAddress"
                          className="text-gray-700 dark:text-white"
                        >
                          {contactMessages.clientAddress}
                        </label>
                        <input
                          id="clientAddress"
                          value={formData.clientAddress}
                          onChange={handleChange}
                          className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-gray-700 dark:text-white"
                  >
                    {contactMessages.message}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={contactMessages.message}
                    rows={8}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary dark:bg-[#0D1B2A] text-white py-3 px-5 rounded-md hover:bg-green-700"
                >
                  {contactMessages.sendMessage}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsComponents;
