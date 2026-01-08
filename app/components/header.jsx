import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <section className=" flex items-center justify-center bg-gradient-to-b from-[#7eac4c] to-[#3f7844] px-8 pt-14">
      <div className="flex w-full max-w-5xl items-center gap-8">
        <div className="flex-1">
          <Image src="/logo.png" alt="Cartão Desconto Legal" width={200} height={60} />
          <h2 className="text-4xl py-8 text-white font-bold">Facilite sua vida com descontos exclusivos!</h2>
          <p className="text-white">Com o Cartão Desconto Legal, você e sua família têm acesso a benefícios exclusivos em saúde, bem-estar, educação e lazer. Cuidar de quem você ama nunca foi tão acessível e vantajoso!</p>
          <Link href="/rede-credenciada" className="inline-block mt-6 bg-white text-[#3f7844] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">Conheça nossa rede credenciada</Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/yas2.png" alt="Família feliz usando o cartão" width={500} height={400} />
        </div>
      </div>
    </section>

  )
}