import Image from "next/image";
import { Button } from "./button";

export default function Header() {
    return (
        <header className="sm:h-screen w-full radial flex sm:flex-row flex-col overflow-hidden">
            <div className="relative sm:w-1/2 h-full w-white flex items-center">
                <div className="max-w-3xl">
                    <div className="relative xl:absolute top-4 left-12 w-[85px] h-[74px]">
                        <Image
                            src="/images/logo-white.png"
                            alt="Imagem de fundo de grande fazendeiro de soja"
                            layout="fill"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col items-start gap-4 text-white px-4 py-6 sm:p-6 xl:p-12">
                        <h2 className="text-2xl xl:text-3xl play font-bold leading-8">Interrompa o ciclo de perdas financeiras causadas pelas <span className="text-orange">devastadoras flutuações do dólar</span> e pela <span className="text-orange">volatilidade extrema das cotações da soja em Chicago</span> e comece a ignorar os conselhos superficiais dos consultores de mercado.</h2>
                        <p className="opacity-80 xl:text-lg"> Na Sal da Terra, <strong>transformamos a ameaça da volatilidade do mercado</strong> em uma oportunidade para o seu negócio. Além de proteger sua produção contra os riscos de mercado, <strong>capacitamos você e sua equipe para tomar Decisões Estratégicas</strong> com confiança utilizando técnicas avançadas de Hedge.</p>
                        <Button />
                    </div>
                </div>
            </div>
            <div className="relative sm:w-1/2 h-full sm:flex sm:items-center">
                <Image
                    src="/images/bg1.png"
                    alt="Imagem de fundo de grande fazendeiro de soja"
                    layout="responsive"
                    width={648}
                    height={720}
                    className="xl:rounded-none sm:rounded-md"
                />
            </div>
        </header>
    )
}