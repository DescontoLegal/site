import Link from "next/link";

export default function Prices() {
  return (
    <section className="py-20 w-1/2 mx-auto">
      <div className="flex">
        <div className="w-1/2 p-4 bg-[#3f7844] rounded-xl text-white p-12 mr-4">
          <h2 className="text-4xl font-semibold mb-2">Individual</h2>
          <h3>R$ 35,90 (mensal)</h3>
          <p className="py-4 text-lg">Ideal para quem deseja cuidar da saúde e bem estar com economia e praticidade.</p>
          <Link href="/rede-credenciada" className="inline-block mt-6 bg-white text-[#3f7844] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">ASSINE JÁ</Link>
          <p className="text-sm pt-6">* Contrato mínimo de 12 meses</p>
        </div>
        <div className="w-1/2 p-4 bg-[#3f7844] rounded-xl text-white p-12">
          <h2 className="text-4xl font-semibold mb-2">Familiar</h2>
          <h3>R$ 49,90 (mensal)</h3>
          <p className="py-4 text-lg">Perfeito pra quem deseja estender os benefícios do Cartão Desconto Legal para toda a família.</p>
          <Link href="/rede-credenciada" className="inline-block mt-6 bg-white text-[#3f7844] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">ASSINE JÁ</Link>
          <p className="text-sm pt-6">* Contrato mínimo de 12 meses</p>
        </div>
      </div>
    </section>
  );
}