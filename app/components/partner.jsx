import Image from "next/image"
import Link from "next/link"

export default function Partner() {
  return (
    <section className="flex items-center justify-center w-1/2 mx-auto pt-14">
      <div className="flex">
        <div className="flex-1">
          <h2 className="text-4xl py-8 text-[#3f7844] font-bold">Seja um parceiro Cartão Desconto Legal e descubra as vantagens!</h2>
          <p>Com o Cartão Desconto Legal, você tem acesso imediato à uma rede de clínicas, laboratórios e farmácias parceiras que oferecem serviços de saúde com descontos especiais. É simples, rápido e sem burocracia.</p>
          <Link href="/rede-credenciada" className="inline-block mt-6 bg-gradient-to-b from-[#7eac4c] to-[#3f7844] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">Conheça nossa rede credenciada</Link>
        </div>
        <div className="flex-1">
          <Image src="/advantage.jpg" alt="Vantagens" width={500} height={500} className="mx-auto" />
        </div>
      </div>
    </section>
  )
}