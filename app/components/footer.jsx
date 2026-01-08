import Image from "next/image"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <section className="bg-[#3f7844] py-16 px-16">
      <footer className="w-1/2 mx-auto text-white">
        <Image src="/logo.png" alt="Cartão Desconto Legal" width={200} height={60} className="py-6" />
        <p>Sua vida com mais saúde e bem-estar.</p>
        <p>Entre em contato conosco e descubra como o FacilyCard pode fazer a diferença para você e sua família.</p>
        
        <span className="flex pt-8">
          <FaInstagram className="text-2xl mr-4" />
          <FaWhatsapp className="text-2xl mr-4" />
          <FaEnvelope className="text-2xl" />
        </span>

        <br /><br />
        <p>&copy; {new Date().getFullYear()} Cartão Desconto Legal. Todos os direitos reservados.</p>
      </footer>
    </section>
  )
}