import { FaShoppingCart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";

export default function Advantage() {
  return (
    <section className="py-20 w-1/2 mx-auto">

      <h1 className="text-4xl font-bold text-[#3f7844]">Vantagens do Cartão Desconto Legal</h1>
      <p className="py-4 pb-12 text-xl">Aproveite o melhor com o Cartão Desconto Legal</p>

      <div className="flex">
        <div className="w-1/3 p-4 bg-[#3f7844] rounded-xl text-white p-12 mr-4">
          <FaShoppingCart className="text-4xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Descontos Exclusivos</h2>
          <p className="py-4 text-lg">Economize em consultas, exames, tratamentos e muito mais.</p>
        </div>
        <div className="w-1/3 p-4 bg-[#3f7844] rounded-xl text-white p-12 mr-4">
          <FaPeopleGroup className="text-4xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Rede de Parceiros</h2>
          <p className="py-4 text-lg">Aproveite vantagens em uma ampla rede de parceiros de qualidade.</p>
        </div>
        <div className="w-1/3 p-4 bg-[#3f7844] rounded-xl text-white p-12">
          <FaRegCreditCard className="text-4xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Acesso Fácil e Rápido</h2>
          <p className="py-4 text-lg">Com o Cartão Desconto Legal em mãos, utilize seus benefícios de forma simples e imediata.</p>
        </div>
      </div>

    </section>
  );
}