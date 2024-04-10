import { Breadcrumbs } from 'astronomy/components/breadcrumbs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="h-full">
      <div className="w-full">
        <Image
          src="/capa-astrofisica-multimensageira.jpg"
          alt="cover astrofisica multimensageira"
          width={1080}
          height={768}
          className="w-full h-96 object-cover object-center"
        />
      </div>

      <div className="container mx-auto p-4 h-full space-y-4 pb-24">
        <Breadcrumbs />

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Astrofísica multimensageira</h2>
          <p>April 9, 2024 - By ikidoncc, and Francielly.</p>
        </div>

        <div className="w-full h-px bg-rosePineDawn-highlight-high"></div>

        <div className="space-y-4">
          <p>
            A ciência é uma ferramenta muito eficiente quanto ao objetivo de
            aumentar o nosso conhecimento sobre a realidade. Mas,
            contraditoriamente, quanto mais sabemos, mais reconhecemos a
            vastidão da nossa ignorância.
          </p>

          <p>
            Em 1609, Galileu apontou seu telescópio para o alto e um novo céu se
            revelou através de suas lentes. O método científico começou, assim,
            uma jornada de ampliação do horizonte de nosso entendimento à medida
            que melhoramos as nossas tecnologias.
          </p>

          <p>
            Até meados do século XX, toda informação produzida pela astronomia
            provinha de uma estreita faixa do espectro eletromagnético.
            Denominamos essa faixa como “visível”, isto é, a luz que os nossos
            olhos podem ver. Quando estudamos a amplitude total desse espectro,
            porém, percebemos que ainda existe muito além do vermelho ou do
            violeta.
          </p>

          <Image
            src="/espectro-eletromagnetico.png"
            alt="img"
            width={1080}
            height={768}
            className="w-full h-auto object-cover object-center"
          />

          <p>
            Com a evolução dos telescópios, nos tornamos capazes de “enxergar”
            além do visível, desde os fenômenos menos energéticos — detectados
            nas ondas de rádio, nas micro-ondas, infravermelho, ultravioleta,
            raios x —, até os eventos mais energéticos do universo —
            representados principalmente pelos raios gama.
          </p>
        </div>
      </div>
    </div>
  )
}
