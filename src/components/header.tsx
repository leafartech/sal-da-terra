import Image from "next/image";
import { Button } from "./button";

export default function Header() {
    return (
        <header className="sm:h-screen w-full radial flex sm:flex-row flex-col overflow-hidden">
            <div className="relative sm:w-1/2 h-full w-white flex items-center">
                <div className="max-w-3xl sm:block flex flex-col items-center">
                    <div className="relative xl:absolute top-4 sm:left-12 w-[85px] h-[74px]">
                        <Image
                            src="/images/logo.png"
                            alt="Imagem de fundo de grande fazendeiro de soja"
                            layout="fill"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col items-start gap-4 text-white px-4 py-6 sm:p-6 xl:p-12">
                        <h2 className="text-2xl xl:text-3xl play font-bold leading-8">Proteja a sua produção contra os riscos de mercado e aumente em até <span className="text-orange">50% a mais a sua margem financeira</span> através do <span className="text-orange">Método HedgePro®</span></h2>
                        <p className="opacity-80 xl:text-lg">Utilize uma metodologia de vendas semelhante à utilizada pelos maiores produtores do Brasil e descubra como as oscilações do mercado podem favorecer o seu negócio.</p>
                        <Button />
                        <ul className="flex flex-col gap-1 opacity-80 text-sm">
                            <li className="">
                                <h4>+ 9 Anos de experiência em Gestão de Risco</h4>
                            </li>
                            <li className="">
                                <h4>+ R$ 2 Bilhões de crédito liberados</h4>
                            </li>
                            <li className="">
                                <h4>+ R$ 2 Milhões de toneladas de Soja (físico) originados</h4>
                            </li>
                            <li className="">
                                <h4>+ 150 Mil hectares protegidos através de Consultoria Direta e Indireta</h4>
                            </li>
                            <li className="">
                                <h4>+ 80 grupos impactados</h4>
                            </li>
                            <li className="">
                                <h4>+ 1 Mil Contratos de Derivativos negociados</h4>
                            </li>
                        </ul>
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