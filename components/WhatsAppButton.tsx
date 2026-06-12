"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "201092635055"; 
  const message = "Hi Ahmed, I reviewed your portfolio and I would love to discuss a potential project with you.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Ahmed on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none group-hover:animate-none" />
      
      <FaWhatsapp className="size-7 transition-transform duration-300 group-hover:rotate-12" />
    </Link>
  );
};

export default WhatsAppButton;