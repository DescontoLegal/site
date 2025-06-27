"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";

export default function Head() {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center text-sm px-6 py-2 border-b border-gray-200">
        <div className="flex items-center gap-2 text-gray-600">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Angra dos Reis, Rio de Janeiro</span>
        </div>

        <div className="flex gap-4 text-gray-600">
          <Link href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faVimeoV} />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white shadow-sm">
        <div
          className="w-[210px] h-full flex items-center bg-gradient-to-r from-[#03A62C] to-[#00975B] text-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 79% 100%, 0% 100%)" }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={50}
            className="p-4"
          />
        </div>

        <ul className="hidden md:flex gap-6 text-base font-medium text-gray-800 ml-6">
          <li>
            <Link href="/" className="hover:text-[#007C94]">
              Início
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#007C94]">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#007C94]">
              Parceiros
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#007C94]">
              Trabalhe Conosco
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#007C94]">
              Contato
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-6 pr-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-gradient-to-r from-[#03A62C] to-[#00975B] text-white rounded-full p-3">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 leading-tight">
                Ligue para nós:
              </p>
              <p className="text-lg font-bold text-gray-800">(24) 99999-9999</p>
            </div>
          </div>

          <Link
            href="/"
            className="hidden md:inline-block bg-gradient-to-r from-[#03A62C] to-[#00975B] hover:bg-[#065f6b] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            Faça seu cartão{" "}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </header>
  );
}
