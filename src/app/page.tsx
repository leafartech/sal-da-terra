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
              <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue">Não permita que os Desafios do Mercado de grãos atrapalhem as suas decisões.</h2>
              <p className="sm:text-xl">Entenda sobre os fatores de formação do Preço</p>
            </div>
            <Image
              src="/images/bg2.png"
              alt="Imagem ilustrativa de soja"
              width={840}
              height={482}
            />
            <div className="flex flex-col items-center text-left sm:text-center gap-2 max-w-4xl">
              <p className="text-zinc-600 sm:text-xl">Compreender sobre todos os fatores que influenciam na formação do Preço da produção é fundamental para tomar qualquer decisão, mas acertar todos eles é impossível. Utilize o seu precioso tempo para traçar estratégias inovadoras e confiáveis para garantir o sucesso do seu empreendimento. Acredite: você não precisará mais acertar o olho da mosca todo ano!</p>
              <p className="text-zinc-600 sm:text-xl py-4 italic font-semibold text-center">Estratégias validadas pelos maiores Produtores</p>
              <p className="text-zinc-600 sm:text-xl">Gerenciar os riscos com uma metodologia pré estabelecida é fundamental para garantir o sucesso financeiro da sua fazenda. Aprenda com os profissionais que estão no mundo dos grandes negócios e traga as estratégias validadas e vitoriosas dos grandes players do Agro para dentro da tua fazenda.</p>
              <p className="text-zinc-600 sm:text-xl py-4 italic font-semibold text-center">Aplique isso: Investir em CDB é mais vantajoso do que jogar na Mega Sena.</p>
              <p className="text-zinc-600 sm:text-xl">Garantir um crescimento equilibrado e controlado a maior parte do tempo é muito mais eficaz do que depender de um único golpe de sorte. O produtor Rural que deixa para vender toda a sua produção em um único dia do ano se assemelha a um jogador obstinado da Mega Sena, apostando todas as suas fichas somente na sua intuição. Adotar a filosofia de crescimento estável e previsível é crucial para acelerar o crescimento do seu negócio rural.</p>
              <p className="text-zinc-600 sm:text-xl py-4 italic font-semibold">Excesso de Informações e Notícias</p>
              <p className="text-zinc-600 sm:text-xl">Tomar decisões de venda em meio a uma avalanche de informações pode ser extremamente desafiador. O bombardeio de notícias que afetam diretamente os preços da produção torna esse processo ainda mais complexo. Além disso, ouvir diferentes consultores com opiniões divergentes sobre o futuro do dólar e da soja pode gerar ainda mais incerteza. Os riscos são inerentes ao setor agrícola e nunca desaparecerão, mas a intensidade desses riscos depende também das suas escolhas e ações.</p>
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
              <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue max-w-2xl">10 benefícios de você ser nosso parceiro</h2>
              <div className="sm:px-4 sm:py-6 w-full max-w-4xl">
                <ul className="flex flex-col gap-4">
                  <ListItem
                    title="Redução dos Riscos de Mercado:"
                  >
                    Nós oferecemos estratégias personalizadas e avançadas de Hedge agrícola que ajudam a proteger o cliente contra as grandes flutuações do mercado (como dólar e das bolsas) que impactam diretamente nos preços.
                  </ListItem>
                  <ListItem
                    title="Desenvolvimento e Capacitação:"
                  >
                    Nosso foco está também em capacitar os nossos clientes e contribuir para a formação de novos líderes e decisores dentro do grupo. Essa é a oportunidade que faltava para incluir novos integrantes familiares e atribuir novas funções dentro do negócio. Temos uma intensa esteira de produtos voltados para capacitação nos mais diversos temas associados à gestão de riscos de mercado e Liderança.
                  </ListItem>
                  <ListItem
                    title="Uso estratégico de Derivativos:"
                  >
                    Entendemos que o uso estratégico e controlado de Derivativos e compreendê-los de maneira aprofundada é essencial para garantia dos bons resultados.
                  </ListItem>
                  <ListItem
                    title="Criação da Política de Hedge personalizada:"
                  >
                    Criamos uma Metodologia de Hedge personalizada respeitando o processo de desenvolvimento e o apetite a riscos de cada cliente, garantindo que as estratégias sejam adequadas, personalizadas, únicas e eficazes.
                  </ListItem>
                  <ListItem
                    title="Utilização de Software exclusivo (HedgePro®) para controle de Hedge:"
                  >
                    Entendemos a grandiosidade e o intenso cuidado que necessitamos ter com as operações realizadas de hedge. Por conta disso, nossos clientes possuem acesso a um sistema exclusivo que visa controlar e associar todas as operações de compra de Insumos, vendas de grãos e derivativos associados visando garantir a eficiência da metodologia proposta.
                  </ListItem>
                  <ListItem
                    title="Metodologias de Hedge já validadas por grandes Produtores:"
                  >
                    Nossos clientes possuem acesso às metodologias semelhantes que os grandes produtores do Brasil utilizam.
                  </ListItem>
                  <ListItem
                    title="Diagnóstico Financeiro Aprofundado:"
                  >
                    Realizamos diagnósticos financeiros detalhados visando identificar possíveis problemas financeiros e áreas de melhoria, permitindo intervenções precisas e bem fundamentadas.
                  </ListItem>
                  <ListItem
                    title="MasterMind exclusivo para Produtores Rurais:"
                  >
                    Nossos clientes estão dentro de um mesmo grupo de pessoas com propósitos semelhantes, a fim de estabelecer novas relações e a dividir dificuldades, oportunidades e estratégias.
                  </ListItem>
                  <ListItem
                    title="Desenvolvimento de uma nova Mentalidade:"
                  >
                    Compreendemos que o crescimento e o desenvolvimento do produtor não dependem apenas do conhecimento sobre riscos de mercado e ferramentas disponíveis. Trabalhamos para fortalecer nossos clientes mentalmente e prepará-los para as mudanças necessárias, superando crenças limitantes e promovendo uma mentalidade de sucesso.
                  </ListItem>
                  <ListItem
                    title="Suporte Estratégico"
                  >
                    A empresa contribui ativamente nas decisões estratégicas do cliente, oferecendo soluções valiosas que podem direcionar o crescimento e a sustentabilidade do negócio a longo prazo.
                  </ListItem>
                </ul>
              </div>
              <Button />
            </div>
          </div>
        </Section>
        <Section className="pb-12 sm:pb-20 px-4">
          <div className="flex flex-col items-center text-left sm:text-center gap-4 sm:gap-6">
            <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue max-w-2xl">Iremos te ajudar de <span className="text-orange">3 formas</span> diferentes</h2>
            <div className="hidden sm:block">
              <Image
                src="/images/circle.png"
                alt="Imagem que representa as 3 formas de ajuda"
                width={817}
                height={401}
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src="/images/circle2.png"
                alt="Imagem que representa as 3 formas de ajuda"
                width={330}
                height={330}
              />
            </div>
            <ul className="w-full block sm:hidden text-xl font-semibold play list-disc list-inside">
              <li>Assessoria de metodologia Hedge</li>
              <li>Treinamento</li>
              <li>Consultoria em Grupo/Fórum</li>
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
              <div className="flex flex-col items-center gap-2">
                <h4 className="play font-semibold text-3xl sm:text-4xl max-w-5xl">Entre em contato com a <span className="text-orange">Sal da Terra Agronegócios</span> hoje mesmo!</h4>
                <h2 className="text-xl font-bold max-w-3xl">Deixe-nos ajudar você a <span className="text-orange">proteger e maximizar os frutos</span> do seu trabalho. Porque quando o assunto é o seu futuro, cada detalhe conta.</h2>
              </div>
              <div className="flex flex-col items-center gap-2 max-w-3xl">
                <p className="text-xl mb-2">Acesse o botão abaixo e entre em contato diretamente conosco:</p>
                <Button />
              </div>
            </div>
          </div>
        </Section>
        <Section className="pt-12 sm:pt-20">
          <div className="sm:text-center flex flex-col items-center justify-center gap-6 max-w-4xl sm:px-0 px-4">
            <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue">Você está preparado para alcançar <span className="text-orange">níveis de excelência</span> mais altos no seu negócio?</h2>
            <div className="flex flex-col items-center text-left sm:text-center gap-2">
              <p className="text-zinc-600 sm:text-xl">Tenha acesso ao <strong>Método HedgePro ®</strong>  e saiba como nossa metodologia pode impulsionar em até 50% de incremento na sua margem financeira, garantindo previsibilidade mesmo com as incertezas do mercado.</p>
              <p className="text-zinc-600 sm:text-xl">Estamos definitivamente prontos para olhar com cuidado o seu negócio, de forma personalizada e única para que possamos maximizar seu lucro e assegurar o sucesso contínuo da sua fazenda.</p>
              <p className="text-zinc-600 sm:text-xl">Acesso o botão abaixo e entre e fale com um dos nossos consultores:</p>
            </div>
            <Button />  
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
            <h2 className="play text-3xl sm:text-4xl font-bold text-deep-blue max-w-2xl">Nossos <span className="text-orange">contatos</span></h2>
            <div className="flex flex-col gap-2">
              <a href="https://api.whatsapp.com/send?phone=5542988113456&text=Ol%C3%A1%20Evandro,%20tudo%20bem?%20" className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#bcb57f]">
                  <Image
                    src="/images/social/phone.png"
                    alt="Ícone de redes sociais"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </div>
                <p className="sm:text-lg text-blue-600 underline font-semibold">(42) 9 8811-3456</p>
              </a>
              <a href="https://www.instagram.com/saldaterra.agronegocios/" className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#bcb57f]">
                  <Image
                    src="/images/social/ig.png"
                    alt="Ícone de redes sociais"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </div>
                <p className="sm:text-lg text-blue-600 underline font-semibold">@saldaterra.agronegocios</p>
              </a>
              <div className="flex wrap items-center gap-4">
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#bcb57f]">
                  <Image
                    src="/images/social/email.png"
                    alt="Ícone de redes sociais"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </div>
                <p className="sm:text-lg text-deep-blue font-semibold">evandrogoes@agrosaldaterra.com.br</p>
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