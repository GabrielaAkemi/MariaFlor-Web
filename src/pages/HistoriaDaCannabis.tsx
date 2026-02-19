import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SplitText from '@/components/animations/SplitText';
import { Button } from '@/components/ui/button';
import heroHistoria from '@/assets/hero-historia.jpg';

const timeline = [
  {
    year: '2006',
    description: 'Consumo e porte de pequenas quantidades da cannabis é descriminalizado no Brasil. Nos anos seguintes, uma onda de relaxamento em políticas proibicionistas mudará o cenário de dezenas de países.'
  },
  {
    year: '2013',
    description: 'Cultivo, produção e venda da cannabis para todos os fins é aprovado pelo Senado uruguaio, tornando o país pioneiro mundial na legalização da substância.'
  },
  {
    year: '2015',
    description: 'É apresentado na Câmara dos Deputados o Projeto de Lei PL 399, que pretende regular o cultivo e a comercialização da cannabis para fins medicinais no Brasil. Anvisa promulga a Resolução RDC 17/2015.'
  },
  {
    year: '2016',
    description: 'Na esteira do PL 399/2015, a Justiça passa a conceder habeas corpus preventivos a indivíduos e associações, que viabilizam o plantio e a produção de cannabis medicinal em território nacional.'
  },
  {
    year: '2020',
    description: 'Entra em vigor a Resolução RDC 327, da Anvisa, que regulamenta a importação de cannabis medicinal. Comissão especial da Câmara dos Deputados aprova o texto-base do PL 399/15.'
  },
];

const HistoriaDaCannabis = () => {
  const [expandedText, setExpandedText] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header backgroundImage={heroHistoria} />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
              Cannabis: cultivo, proibição e a luta pela legalização
            </h1>
          </div>
        </section>

        {/* History Introduction */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              A cannabis é cultivada pelos seres humanos pelo menos desde o início da Revolução Agrícola. 
              Os primeiros registros seguros de plantio datam de 10 mil anos atrás, mesmo período em que 
              aprendemos a cultivar grãos como o trigo e o arroz, dois pilares da alimentação humana.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              De lá para cá, a planta se tornou parte central de muitas culturas, assumindo fins 
              religiosos, medicinais, funcionais e recreativos.
            </p>
          </div>
        </section>

        {/* Prohibition Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto">
            <SplitText
              text="Uso contemporâneo e a tragédia social da proibição"
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Remédios a base de cannabis nos acompanham há milênios e foram amplamente comercializados 
              até o começo do século XX. A partir de meados da década de 1930, uma onda proibicionista 
              iniciada nos EUA se espalhou rapidamente pelo mundo, condenando a cannabis ao status de 
              droga ilegal.
            </p>

            {!expandedText ? (
              <Button
                onClick={() => setExpandedText(true)}
                variant="default"
                size="lg"
                className="flex items-center gap-2"
              >
                LER MAIS
                <ChevronDown className="h-5 w-5" />
              </Button>
            ) : (
              <>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Essas décadas de criminalização produziram efeitos sociais devastadores, sentidos 
                  especialmente por populações mais vulneráveis: encarceramento em massa, violência 
                  policial, guerras entre facções de traficantes e bloqueio do acesso à terapia com 
                  canabinoides, que teria transformado a vida de milhões de pessoas.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Esse trágico quadro social é uma área de atenção para a Maria Flor – parte da nossa 
                  atuação implica fornecer suporte legal e financeiro a indivíduos e organizações que 
                  lutam contra prisões injustas relacionadas às drogas.
                </p>
                
                <Button
                  onClick={() => setExpandedText(false)}
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  MOSTRAR MENOS
                  <ChevronUp className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </section>

        {/* Legalization Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <SplitText
              text="Luta pela legalização: o papel da medicina e da ciência"
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            
            <p className="text-lg text-foreground leading-relaxed mb-12">
              Se os efeitos negativos da Guerra às Drogas ainda são uma realidade no mundo e no Brasil, 
              movimentos pela legalização têm conseguido grandes conquistas nos últimos anos, apoiados 
              pelo aumento do volume de pesquisas científicas.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-foreground leading-relaxed">
                Navegando por essa realidade jurídica complexa, a Maria Flor oferece três categorias 
                de fitoterápicos: óleos ricos em CBD e THC e pomada. Todos os produtos são fabricados 
                com canabinoides em espectro amplo – sem o isolamento químico de uma ou mais 
                substâncias e fazendo uso da planta de forma integral.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HistoriaDaCannabis;
