"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/svgs";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const encodedMessage = message ? encodeURIComponent(message) : "";
  const whatsappUrl = `https://wa.me/${phoneNumber}${
    encodedMessage ? `?text=${encodedMessage}` : ""
  }`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco
      </span>
    </Link>
  );
}
