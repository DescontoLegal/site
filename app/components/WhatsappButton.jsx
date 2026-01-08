"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton({ phone, message }) {
  const text = message ? encodeURIComponent(message) : undefined;
  const href = text
    ? `https://wa.me/${phone}?text=${text}`
    : `https://wa.me/${phone}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp className="text-3xl" />
    </Link>
  );
}
