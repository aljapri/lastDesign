import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
const whatsappNumber = 'YOUR_PHONE_NUMBER'; // Replace with your phone number
const message = 'Hello! How can I help you?'; // Customize your message
const url = `https://wa.me/0985306816`;
export default function WhatsApp() {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg transition-transform active:scale-95 hover:shadow-xl z-40 hover:scale-110"
    >
      <FaWhatsapp size={24} />
    </Link>  )
}