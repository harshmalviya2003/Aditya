// components/FloatingWhatsAppButton.tsx
'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const FloatingWhatsAppButton = () => {
  // Replace with your WhatsApp number (include country code without '+' sign)
  const whatsappNumber = '+919479365137'; 
  const whatsappMessage = 'Hello, I would like to inquire about your services';

  return (
    <div className="fixed left-4 bottom-4 md:left-6 md:bottom-6 z-50">
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#4CAF50] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Link>
    </div>
  );
};

export default FloatingWhatsAppButton;