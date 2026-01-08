import Image from "next/image"

export default function Faq() {
  return (
    <section className="py-10 w-1/2 mx-auto">
      <div className="flex">
        <div className="w-1/2 p-4 rounded-xl p-12 mr-4">
          <h2 className="text-4xl font-semibold mb-8">Perguntas Frequentes</h2>
          <h3 className="font-bold">1 - Como posso usar o FacilyCard?</h3>
          <p>Basta apresentar seu FacilyCard nos estabelecimentos parceiros para garantir os descontos e benefícios.</p>
          <br />
          <h3 className="font-bold">2 - Posso incluir dependentes?</h3>
          <p>Sim, o Plano Familiar permite até 4 pessoas.<br />
            Regra de dependentes – cônjuge, filhos menores de 21 anos e pais acima de 60.</p>
        </div>
        <div className="w-1/2 p-4 rounded-xl p-12 mr-4">
          <Image src="/question.jpg" alt="Planos Empresariais" width={500} height={300} className="rounded-lg mb-4" />
        </div>
      </div>
    </section>
  )
}