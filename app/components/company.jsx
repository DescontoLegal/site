import Image from "next/image";
import Link from "next/link";

export default function Company() {
  return (
    <section className="py-10 w-1/2 mx-auto bg-gray-100 rounded-xl">
      <div className="flex">
        <div className="w-1/2 p-4 rounded-xl p-12 mr-4">
          <Image src="/company.jpg" alt="Planos Empresariais" width={500} height={300} className="rounded-lg mb-4" />
        </div>
        <div className="w-1/2 p-4 rounded-xl p-12 mr-4">
          <h2 className="text-4xl font-semibold mb-2">Planos Empresariais</h2>
          <p className="py-4 text-lg">Com o Cartão Desconto Legal, você tem acesso imediato à uma rede de clínicas, laboratórios e farmácias parceiras que oferecem serviços de saúde com descontos especiais. É simples, rápido e sem burocracia.</p>
          <Link href="/rede-credenciada" className="inline-block mt-6 bg-gradient-to-b from-[#7eac4c] to-[#3f7844] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">Garanta já seu cartão aqui</Link>
        </div>
      </div>
    </section>
  )
}