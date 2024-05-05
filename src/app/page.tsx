import { Button } from "@/components/button";
import Header from "@/components/header";
import { ListItem } from "@/components/list-item";
import { PersonCard } from "@/components/person-cart";
import Section from "@/components/section";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="pt-12 sm:pt-24 bg-light">
        <Section className="pb-8 sm:pb-20 px-4">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center text-left sm:text-center gap-2 max-w-5xl">
              <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue">Não permita que as <span className="text-orange">oscilações do dólar ou os preços da soja em Chicago</span> determinem suas perdas!</h2>
              <p className="sm:text-xl"><strong>Chega de seguir a multidão e enfrentar prejuízos recorrentes</strong>. Na <span className="text-orange"><strong>Sal da Terra</strong></span>, oferecemos consultoria e treinamento especializados para <strong>protegê-lo contra os riscos de mercado</strong>, ajudando-o a navegar pelas flutuações imprevisíveis com segurança.</p>
            </div>
            <Image
              src="/images/bg2.png"
              alt="Imagem ilustrativa de soja"
              width={840}
              height={482}
            />
            <div className="flex flex-col items-center text-left sm:text-center gap-2 max-w-4xl">
              <p className="sm:text-xl">Com nossas <strong>estratégias personalizadas, fundamentadas em análises aprofundadas</strong>, você ganha controle sobre suas finanças, assegurando não só a sobrevivência, mas também a <strong>prosperidade em um mercado global competitivo</strong>.</p>
              <p className="sm:text-xl">Esqueça as soluções genéricas que prometem muito e entregam pouco. <span className="text-orange"><strong>Opte pela Sal da Terra</strong></span>, onde o <strong>seu sucesso é a nossa maior prioridade</strong>.</p>
              <p className="sm:text-xl">Consulte <strong>nossos especialistas</strong> hoje mesmo e transforme incertezas em estabilidade duradoura.</p>
            </div>
            <Button />
          </div>
        </Section>
        <Section
          classNameS="relative"
          className="w-full flex bg-deep-blue py-12 sm:py-20 px-4"
        >
          <Image
            src="/images/bg3.png"
            alt=""
            layout="fill"
            className="absolute hidden sm:block"
          />
          <div className="relative flex justify-center items-center">
            <div className="w-full sm:w-2/3 flex flex-col items-start gap-4 sm:gap-8">
              <h2 className="play text-3xl sm:text-4xl font-bold text-white">Por que escolher a <span className="text-orange"><strong>Sal da Terra</strong></span>?</h2>
              <div className="text-white opacity-80 flex flex-col gap-4 sm:text-lg">
                <p>Com nossas metodologias de <strong><span className="text-orange">Hedge personalizadas</span>, prometemos não só estabilizar sua margem financeira</strong>, mas também <strong>transformar sua maneira de fazer negócios</strong>. Você aprenderá a antecipar e reagir às flutuações do mercado com estratégias que foram customizadas para o seu perfil e necessidades.</p>
                <p>Isso significa <strong>mais previsibilidade</strong> e menos surpresas, permitindo que você <strong>planeje com confiança</strong> o futuro da sua empresa.</p>
                <p>E não paramos por aí.</p>
                <p>Sabemos que <strong>uma estratégia eficaz vai além do simples gerenciamento de riscos</strong>. É por isso que também focamos intensamente na capacitação da sua equipe.</p>
                <p>Com nossos treinamentos especializados, <strong>seus gestores e colaboradores estarão equipados para <span className="text-orange">implementar práticas de Hedge</span></strong> e tomar decisões financeiras <strong>estratégicas que alavancam seu negócio</strong> frente à concorrência.</p>
              </div>
              <Button />
            </div>
          </div>
        </Section>
        <Section className="py-12 sm:py-20 px-4">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center text-left sm:text-center gap-6">
              <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue max-w-2xl"><span className="text-orange">Sal da terra agronegócios</span> 8 benefícios de você ser nosso parceiro</h2>
              <div className="sm:px-4 sm:py-6 sm:border-x-[12px] sm:border-[#BCB57F] max-w-4xl">
                <ul className="flex flex-col gap-4 sm:gap-8">
                  <ListItem
                    title="Mitigação e redução dos Riscos de Mercado: "
                  >
                    <span>A consultoria oferece estratégias de <span className="text-orange"><strong>Hedge</strong></span> personalizadas que ajudam a <strong>proteger contra variações cambiais, flutuações nas cotações de commodities e outros riscos</strong> de mercado. Trabalharemos com as principais ferramentas de Hedge/proteção, incluindo operações avançadas de derivativos.</span>
                  </ListItem>
                  <ListItem
                    title="Estabilidade Financeira:"
                  >
                    <span>Ao adotar metodologias de <span className="text-orange"><strong>Hedge</strong></span> eficazes, os produtores podem <strong>garantir uma maior estabilidade em sua margem financeira</strong> (Ebitda), tornando os <strong>fluxos de caixa mais previsíveis e seguros</strong>.</span>
                  </ListItem>
                  <ListItem
                    title="Melhoria nas Práticas de Comercialização:"
                  >
                    <span>O serviço inclui a <strong>capacitação de equipes</strong> e a <strong>implementação de práticas avançadas para a comercialização e proteção de ativos</strong>, otimizando assim as operações gerais.</span>
                  </ListItem>
                  <ListItem
                    title="Capacitação em Gestão de Riscos:"
                  >
                    <span>A <span className="text-orange"><strong>Sal da Terra</strong></span> também foca em <strong>educar e treinar os decisores</strong> sobre as melhores práticas de gestão de riscos financeiros, <strong>aumentando a competência interna para decisões mais estratégicas</strong>.</span>
                  </ListItem>
                  <ListItem
                    title="Diagnóstico Financeiro Aprofundado:"
                  >
                    <span>A consultoria realiza <strong>diagnósticos detalhados</strong> para identificar possíveis problemas financeiros e áreas de melhoria, <strong>permitindo intervenções precisas e bem fundamentadas</strong>.</span>
                  </ListItem>
                  <ListItem
                    title="Desenvolvimento de Políticas de Hedge Personalizadas:"
                  >
                    <span><strong>Cada solução é desenhada para respeitar o apetite de risco e as limitações específicas</strong> de cada cliente, garantindo que as estratégias sejam <strong>adequadas e eficazes</strong>.</span>
                  </ListItem>
                  <ListItem
                    title="Melhor Relacionamento com Bancos:"
                  >
                    <span>A <span className="text-orange"><strong>Sal da Terra</strong></span> auxilia na <strong>intermediação e melhoria de relações com instituições financeiras</strong>, ajudando na <strong>obtenção de créditos e financiamentos</strong> que se alinhem melhor às necessidades do cliente.</span>
                  </ListItem>
                  <ListItem
                    title="Suporte Estratégico:"
                  >
                    <span>A empresa contribui ativamente nas decisões estratégicas da companhia, oferecendo <strong>insights valiosos que podem direcionar o crescimento e a sustentabilidade do negócio</strong> a longo prazo.</span>
                  </ListItem>
                </ul>
              </div>
              <Button />
            </div>
          </div>
        </Section>
        <Section className="pb-12 sm:pb-20 px-4">
          <div className="flex flex-col items-center text-left sm:text-center gap-4 sm:gap-6">
            <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue max-w-2xl">Iremos te ajudr de <span className="text-orange">3 formas</span> diferentes</h2>
            <div className="hidden sm:block">
              <Image
                src="/images/circle.png"
                alt="Imagem que representa as 3 formas de ajuda"
                width={817}
                height={401}
              />
            </div>
            <ul className="w-full block sm:hidden text-xl font-semibold play list-disc list-inside">
              <li>Treinamento</li>
              <li>Consultoria em Grupo/Fórum</li>
              <li>Assessoria de metodologia Hedge</li>
            </ul>
          </div>
        </Section>
        <Section className="py-8 sm:py-16 px-4" classNameS="radial-3">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-start sm:items-center text-left sm:text-center gap-6 text-light">
              <div className="w-24 sm:w-32">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={200}
                  height={164}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-lg sm:text-xl">Entre em contato com a <span className="text-orange">Sal da Terra Agronegócios</span> hoje mesmo!</h4>
                <h2 className="play text-3xl sm:text-4xl font-bold max-w-4xl">Deixe-nos ajudar você a <span className="text-orange">proteger e maximizar os frutos</span> do seu trabalho. Porque quando o assunto é o seu futuro, cada detalhe conta.</h2>
              </div>
              <div className="mt-2 flex flex-col gap-4">
                <p className="tracking-wide">Acesse o botão abaixo e entre em contato diretamente conosco:</p>
                <Button />
              </div>
            </div>
          </div>
        </Section>
        <Section className="pt-12 sm:pt-20">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center text-left sm:text-center gap-8 sm:gap-12">
              <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue max-w-2xl">Fundadores da <span className="text-orange">Sal da Terra</span></h2>
              <div className="flex flex-col gap-8 sm:gap-12 px-4">
                <PersonCard
                  image="evandro"
                  name="Evandro Goes"
                >
                  <ul className="sm:text-lg text-deep-blue text-left list-disc list-inside font-medium">
                    <li>2015: Graduado em Agronomia pela UNICENTRO.</li>
                    <li>2015-2019: Trader de Commodities agrícolas na Louis Drefyus Company (LDC) no estado do MT.</li>
                    <li>2019-2024: Gerente de grandes contas do agronegócio no banco ITAU BBA.</li>
                  </ul>
                </PersonCard>
                <PersonCard
                  image="flavia"
                  name="Flavia Tramontin"
                >
                  <ul className="sm:text-lg text-deep-blue text-left list-disc list-inside font-medium">
                    <li>2014: Graduada em Engenharia Química pela UTFPR-PG.</li>
                    <li>2017: Mestre em Engenharia Mecânica pela UTFPR-PG.</li>
                    <li>2022: Doutora em Engenharia Química pela UNICAMP.</li>
                    <li>2024: Fundadora, estrategista e consultora de negócios digitais na agência FT Negócios </li>Digitais.
                    <li>Criadora do Método Sintonia - Narrativa de posicionamento no digital.</li>
                    <li>Mentora e treinadora de pessoas.</li>
                  </ul>
                </PersonCard>
              </div>
              <span className="px-4 w-full flex justify-center">
                <Button />
              </span>
            </div>
          </div>
        </Section>
        <Section
          classNameS="sm:border-y sm:border-deep-blue py-12 sm:py-20 mt-0 sm:mt-20"
          className=""
        >
          <div className="flex flex-col gap-6 sm:gap-12">
            <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue max-w-2xl">Nossas <span className="text-orange">redes sociais</span></h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#bcb57f]">
                  <Image
                    src="/images/social/phone.png"
                    alt="Ícone de redes sociais"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </div>
                <p className="text-lg text-deep-blue font-semibold">(42) 99998811-3456</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#bcb57f]">
                  <Image
                    src="/images/social/ig.png"
                    alt="Ícone de redes sociais"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </div>
                <p className="text-lg text-deep-blue font-semibold">@saldaterra.agronegocios</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#bcb57f]">
                  <Image
                    src="/images/social/email.png"
                    alt="Ícone de redes sociais"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </div>
                <p className="text-lg text-deep-blue font-semibold">evandrogoes@agrosaldaterra.com.br</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="w-full py-6 radial-4 flex justify-center items-center">
        <div className="w-24">
          <Image
            src="/images/logo.png"
            alt=""
            width={200}
            height={164}
          />
        </div>
      </footer>
    </div>
  )
}