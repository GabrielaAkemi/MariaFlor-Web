import { useEffect, useRef, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SplitText from '@/components/animations/SplitText';
import { Button } from '@/components/ui/button';
import heroPorQueCannabis from '@/assets/hero-por-que-cannabis.jpg';
import cicleImage from '@/assets/cicle.png';
import cannabisFlorImage from '@/assets/cannabis-flor.png';

const LeafBackgroundSVG = () => (
  <svg
    className="w-full absolute inset-0 max-w-7xl h-auto mx-auto my-auto opacity-10 z-0"
    viewBox="0 0 275 224"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M237.933 116.576C230.667 115.474 223.314 114.57 215.933 113.98C200.372 112.734 184.885 117.759 173.007 127.907C163.435 136.087 151.041 141.055 137.5 141.055C124.198 141.055 111.881 136.429 102.297 128.523C88.9844 117.542 72.1008 111.751 54.9351 113.39C48.9444 113.963 42.9762 114.726 37.0672 115.621C24.5864 117.51 12.1338 118.829 0 118.846C11.5782 125.337 23.4864 129.975 35.5526 133.276C51.2487 137.572 67.6528 138.499 83.8961 137.767C73.9454 142.286 64.3585 147.695 55.1636 153.482C45.7854 159.385 36.2323 164.817 26.479 169.093C26.479 169.096 26.479 169.093 26.479 169.096C38.06 170.251 49.2603 169.799 60.1192 168.22C77.9731 165.625 94.8623 158.307 110.57 149.653L110.764 149.545C116.191 146.557 122.791 150.57 122.681 156.773C122.038 193.327 136.871 223.944 136.899 224C136.899 224 136.899 224 136.899 223.997C148.153 197.967 152.085 175.649 152.333 157.448C152.415 151.373 158.984 147.613 164.298 150.539L164.422 150.607C180.129 159.261 197.018 166.582 214.872 169.175C225.731 170.754 236.934 171.206 248.513 170.051C248.513 170.048 248.513 170.051 248.513 170.048C238.759 165.774 229.206 160.34 219.828 154.44C210.633 148.653 201.046 143.244 191.095 138.725C207.339 139.453 223.743 138.53 239.439 134.234C251.505 130.929 263.416 126.294 274.992 119.804C262.866 119.787 250.414 118.465 237.933 116.576Z"
      className="fill-green-subtle"
    />
    <path
      d="M187.606 76.4997C187.606 105.741 165.446 126.707 137.5 126.707C109.554 126.707 87.3936 105.744 87.3936 76.4997C87.3936 47.2555 121.778 0.499878 137.5 0.499878C153.222 0.499878 187.606 47.2555 187.606 76.4997Z"
      className="fill-green-subtle"
    />
    <path
      d="M187.719 76.1721C187.719 105.481 165.511 126.492 137.5 126.492C109.489 126.492 87.2808 105.481 87.2808 76.1721C87.2808 46.863 121.742 0 137.5 0C153.258 0 187.719 46.863 187.719 76.1721Z"
      className="fill-green-subtle"
    />
  </svg>
);

const diseases = [
  'Epilepsia', 'Dor e inflamação', 'AIDS', 'Câncer', 'Esclerose Múltipla', 'Glaucoma',
  'Artrite', 'AVC', 'Depressão', 'Parkinson', 'Endometriose', 'ELA (esclerose lateral amiotrófica)',
  'Insônia', 'Osteoporose', 'Síndrome de Dravet', 'Lennox-Gastaut', 
  'TEPT (Transtorno de Estresse Pós-Traumático)', 'Colite ulcerosa', 'Doença de Crohn',
  'Anorexia', 'Psoríase', 'Diabetes', 'Fibromialgia', 'Alzheimer', 'Ansiedade', 'Autismo',
  'Dermatite', 'Dor crônica', 'Enxaqueca', 'Esquizofrenia', 'Obesidade', 'Catarata',
  'Paralisia supranuclear progressiva', 'Síndrome de Tourette', 'Dependência Química', 'TOC'
];

const PorQueCannabis = () => {
  const [textStep, setTextStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<number | null>(null);

  const rotationIntervalMs = 3000; 
  const pauseAfterClickMs = 3000; 

  const textContent = [
    "As propriedades terapêuticas da cannabis derivam de seus mais de 100 fitocanabinóides, ou canabinóides vegetais – potentes compostos antioxidantes naturais.",
    "Os fitocanabinoides têm estrutura química semelhante ao sistema endocanabinoide interno do corpo humano – nossa própria rede biológica de receptores que regulam funções essenciais e nos mantêm ativos e saudáveis. Como uma chave que se encaixa na fechadura, os fitocanabinoides da cannabis (como o CBD e o THC) ativam os receptores em nosso cérebro e corpo, desencadeando benefícios gerais de bem-estar.",
    "A 'chave' mais eficaz é a cannabis de espectro amplo, produzida a partir da flor inteira. O processo permite aproveitar a mais ampla matriz de fitocanabinóides e terpenos complementares, unindo seus esforços em um fenômeno conhecido como 'efeito orquestra', multiplicando os benefícios terapêuticos da planta.",
    "Na Maria Flor, o controle de qualidade é feito desde a escolha das sementes e do plantio. As mudas são cultivadas com técnicas agroflorestais, sob um processo 100% orgânico e biodinâmico, respeitando fases de luz natural e períodos de descanso das plantas. Isso enriquece ainda mais a extração do óleo e a eficácia dos fitoterápicos. Esse é o jeito Maria Flor de cuidar de você. Vem cultivar! Vem ser Maria!"
  ];

  const introPhrase = "A Maria Flor nasceu para entregar bem-estar, natureza, comunidade, acolhimento e conhecimento – com DNA feminino – por meio de produtos à base de cannabis.";

  // Efeito de rotação automática. O ciclo continua a menos que 'isPaused' seja true (após clique manual)
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!isPaused) {
        setTextStep((s) => (s + 1) % textContent.length);
      }
    }, rotationIntervalMs);

    return () => {
      clearInterval(id);
    };
  }, [isPaused, textContent.length]);

  // limpa timeout pendente no unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleIndicatorClick = (index: number) => {
    setTextStep(index);
    // Pausa temporariamente (6s) após interação do usuário e depois retoma
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      resumeTimeoutRef.current = null;
    }, pauseAfterClickMs);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header backgroundImage={heroPorQueCannabis} />

      <main className="flex-1">
        <section className="relative py-20 px-6 md:px-12 bg-green-50 overflow-hidden">
          <LeafBackgroundSVG />
          <div className="max-w-7xl mx-auto relative z-10">

            {/* FRASE AJUSTADA + IMAGEM */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-20 gap-10 md:gap-16 px-4">
              <h1
                className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-serif font-semibold italic
                  text-primary
                  max-w-3xl text-center md:text-left
                  leading-relaxed tracking-wide
                "
              >
                "{introPhrase}"
              </h1>

              <div className="w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 flex-shrink-0">
                <img
                  src={cannabisFlorImage}
                  alt="Maria Flor DNA Feminino"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 items-center mt-16">
              <div className="flex justify-center items-center order-1 md:order-1">
                {/* TAMANHO DO CIRCLE IMAGE AUMENTADO (VALORES MAIORES) */}
                <img
                  src={cicleImage}
                  alt="Círculo de Benefícios da Cannabis"
                  className="pointer-events-none
                             w-[500px] sm:w-[650px] md:w-[800px] lg:w-[1100px] xl:w-[1300px] max-w-full
                             h-auto object-contain mx-auto"
                />
              </div>

              {/* Texto e indicadores - ROTAÇÃO AUTOMÁTICA ATIVA */}
              <div
                className="flex flex-col justify-between relative z-20 p-6 md:p-8 order-2 md:order-2
                           md:w-[540px] lg:w-[600px] xl:w-[640px] md:min-h-[440px] bg-transparent rounded-lg"
                // REMOVIDO o onMouseEnter/onMouseLeave para forçar a automaticidade
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-primary text-left">
                    Por que a cannabis faz bem e como ela funciona?
                  </h2>
                  <p
                    className="text-lg text-foreground leading-relaxed mb-6 text-left"
                    aria-live="polite"
                  >
                    {textContent[textStep]}
                  </p>
                </div>

                {/* Indicadores (listra de 4 repartições) */}
                <div className="mt-4">
                  <div className="flex gap-2 items-center">
                    {textContent.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleIndicatorClick(i)}
                        className={`h-2 rounded-md flex-1 transition-colors duration-300 focus:outline-none
                          ${i === textStep ? 'bg-primary' : 'bg-green-100'}`
                        }
                        aria-label={`Mostrar trecho ${i + 1}`}
                        title={`Mostrar trecho ${i + 1}`}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE DOENÇAS */}
        <section className="py-16 px-6 md:px-12 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <SplitText
              text="Patologias tratáveis com cannabis medicinal"
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            <p className="text-lg text-foreground mb-8 text-center max-w-3xl mx-auto">
              A cannabis tem ação comprovada em uma série de patologias, e a cada dia surgem novos estudos 
              promissores que avançam a compreensão da ciência a respeito da substância.
            </p>
            <p className="text-lg text-accent font-semibold mb-12 text-center">
              Confira abaixo algumas doenças em cujo tratamento a cannabis pode fazer a diferença:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diseases.map((disease, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md border border-green-200 hover:border-green-400 transition-colors"
                >
                  <p className="text-foreground font-medium">{disease}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO PARA PETS */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <SplitText
              text="Até para pets e vets?"
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Isso mesmo, os benefícios dos canabinoides se estendem para os seus melhores amigos. 
              No mundo todo, pais, mães e tratadores de pets e vets têm comprovado na prática os 
              impactos positivos da cannabis em múltiplos aspectos dos animais, sejam emocionais ou físicos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = '/como-se-associar'}
                size="lg"
                variant="hero"
              >
                Fale com a Maria Flor e saiba mais a respeito!
              </Button>
              <Button
                onClick={() => window.location.href = 'https://app.mariaflor.org.br/AreaAssociados'}
                size="lg"
                variant="outline"
              >
                É veterinário ou tratador? Faça o seu cadastro!
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PorQueCannabis;