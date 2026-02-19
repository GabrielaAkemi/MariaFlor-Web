import { FiHeart, FiGift, FiUsers, FiTrendingUp, FiSun, FiBook } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SplitText from '@/components/animations/SplitText';
import Carousel, { CarouselItem } from '@/components/animations/Carousel';
import RollingGallery from '@/components/animations/RollingGallery';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroQuemSomos from '@/assets/hero-quem-somos.jpg';

const values: CarouselItem[] = [
  {
    id: 1,
    title: 'EMPATIA',
    description: 'Tudo começa por se colocar no lugar do outro. Nossa experiência é baseada no cultivo diário da capacidade de ouvir, sentir e compartilhar momentos difíceis e conquistas.',
    icon: <FiHeart className="carousel-icon" />
  },
  {
    id: 2,
    title: 'GRATIDÃO',
    description: 'Do preparo da terra à entrega do produto, o ciclo de vida da Maria Flor é absolutamente gratificante. Essa gratidão pelo propósito permeia nossa atuação.',
    icon: <FiGift className="carousel-icon" />
  },
  {
    id: 3,
    title: 'DOAÇÃO',
    description: 'Missão de vida. Sacerdócio. Entrega total. A Maria Flor é formada por pessoas comprometidas a oferecerem o melhor de si mesmas.',
    icon: <FiHeart className="carousel-icon" />
  },
  {
    id: 4,
    title: 'SINTROPIA',
    description: 'Vivemos e produzimos em sintonia com os ciclos da natureza, de forma 100% orgânica, agroflorestal, não-predatória e não-extrativista.',
    icon: <FiSun className="carousel-icon" />
  },
  {
    id: 5,
    title: 'QUALIDADE DE VIDA',
    description: 'É sobre viver melhor. Entregamos qualidade de vida e nos alimentamos de volta dela. Um ciclo virtuoso de eterna entrega e recompensa.',
    icon: <FiTrendingUp className="carousel-icon" />
  },
  {
    id: 6,
    title: 'COMUNIDADE',
    description: 'Somos um organismo coletivo, formado pela cooperação mútua. Tudo que fazemos nasce da comunidade e para ela retorna.',
    icon: <FiUsers className="carousel-icon" />
  },
  {
    id: 7,
    title: 'DEDICAÇÃO À CIÊNCIA',
    description: 'O conhecimento é a mais libertadora das habilidades humanas. É a partir da ciência que a Maria Flor cultiva sabedoria.',
    icon: <FiBook className="carousel-icon" />
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
];

const QuemSomos = () => {
  const [storyStep, setStoryStep] = useState(0);

  const storyContent = [
    {
      text: "Cláudia já não sabia mais a quem recorrer. Depois de anos lutando pela saúde do filho Mateus, ela tinha chegado a um beco sem saída. Portador de epilepsia de difícil controle, o garoto tinha até 80 convulsões ao dia. Depois de uma série de tratamentos malsucedidos, Cláudia ouviu falar sobre o potencial da cannabis no tratamento da doença."
    },
    {
      text: "Com muito esforço, ela adquiriu o produto importado. Porém, o alto custo do medicamento (que chega a custar mais de R$ 2 mil ao mês) tornava sua adoção extremamente difícil. Para piorar, o produto não surtiu o efeito desejado. O caminho dos dois começou a mudar quando a terapeuta canábica Fernanda Peixoto viu o apelo da mãe em um canal de TV. Ciente da diferença entre as propriedades do CBD isolado e do óleo de espectro amplo, ela decidiu ajudar. A terapeuta produziu um frasco do óleo e o entregou a Cláudia. Em quatro dias, o milagre: as crises haviam cessado completamente."
    },
    {
      text: "O resultado assombroso criou uma conexão imediata e inquebrável entre os três. A partir dali, Cláudia Marin e Fernanda Peixoto tomaram uma decisão que mudaria a vida delas e de centenas de pessoas: propagar os benefícios da cannabis e lutar pela legalização do seu uso. Naquele ato de amor materno, coragem e compromisso com a vida, nascia a Maria Flor: uma associação canábica dedicada a promover bem-estar e qualidade de vida, com os dois pés no acolhimento com toque feminino e na agricultura sustentável."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header backgroundImage={heroQuemSomos} />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
              Uma associação criada por Marias
            </h1>
          </div>
        </section>

        {/* About Association */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <SplitText
              text="A associação"
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Constituída em 2020, a Associação Cannabica Maria Flor faz a diferença na vida de 
              milhares de portadores de patologias e seus familiares. Lutando juridicamente, levando 
              informação e acolhendo famílias, a associação garante o acesso ao tratamento com cannabis 
              a todes que necessitam.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Mais do que tratamento, nós oferecemos um ecossistema de bem-estar e acolhimento a pessoas 
              com diferentes anseios, necessidades e aspirações.
            </p>
            <p className="text-lg font-semibold text-accent mb-4">
              Para visualizar os documentos clique no botão abaixo:
            </p>
            <Button variant="default" size="lg">
              Baixar Estatuto
            </Button>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-6xl mx-auto">
            <SplitText
              text="Nossos valores"
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            
            <div className="flex justify-center">
              <Carousel
                items={values}
                baseWidth={400}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
              />
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <SplitText
              text="O começo: duas mães e uma causa"
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {storyContent[storyStep].text}
            </p>

            <div className="flex justify-center gap-4 mb-12">
              {storyStep > 0 && (
                <Button
                  onClick={() => setStoryStep(storyStep - 1)}
                  variant="outline"
                  size="lg"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Voltar
                </Button>
              )}
              
              {storyStep < storyContent.length - 1 && (
                <Button
                  onClick={() => setStoryStep(storyStep + 1)}
                  variant="default"
                  size="lg"
                >
                  Continuar
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>

            <RollingGallery 
              images={galleryImages}
              autoplay={true}
              pauseOnHover={true}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;
