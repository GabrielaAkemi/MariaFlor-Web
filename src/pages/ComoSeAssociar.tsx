import { FileText, User, Home, FileCheck, Scale, CreditCard, ShoppingCart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SplitText from '@/components/animations/SplitText';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroComoSeAssociar from '@/assets/hero-como-se-associar.jpg';

const steps = [
  { icon: User, label: 'Primeiro Contato', description: 'Entre em contato conosco' },
  { icon: FileCheck, label: 'Consulta', description: 'Consulta médica e avaliação' },
  { icon: FileText, label: 'Documentos', description: 'Envio de documentação' },
  { icon: Scale, label: 'Ajuizamento', description: 'Processo legal' },
  { icon: CreditCard, label: 'Cadastro', description: 'Cadastro na associação' },
  { icon: ShoppingCart, label: 'Pagamento', description: 'Pagamento da mensalidade' },
  { icon: FileCheck, label: 'Pedido', description: 'Primeiro pedido do óleo' },
];

const ComoSeAssociar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header backgroundImage={heroComoSeAssociar} />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
              Vem ser Maria
            </h1>
            <p className="text-xl text-foreground">
              Para se cadastrar leia com atenção e siga as instruções
            </p>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <SplitText
              text="DOCUMENTOS NECESSÁRIOS:"
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="p-6 border-green-200">
                <FileText className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold mb-2">RG ou CNH do paciente</h3>
              </Card>
              
              <Card className="p-6 border-green-200">
                <FileText className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold mb-2">RG ou CNH do responsável</h3>
              </Card>
              
              <Card className="p-6 border-green-200">
                <Home className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold mb-2">Comprovante de residência</h3>
              </Card>
              
              <Card className="p-6 border-green-200">
                <FileCheck className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold mb-2">Termo de responsabilidade</h3>
              </Card>
              
              <Card className="p-6 border-green-200">
                <FileText className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold mb-2">Receita médica</h3>
              </Card>
              
              <Card className="p-6 border-green-200">
                <FileText className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold mb-2">Laudo médico</h3>
              </Card>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <p className="text-foreground mb-4">
                Com todos estes documentos em mãos preencha seu cadastro e aguarde a confirmação 
                por email em até 5 dias. Após o recebimento do e-mail de confirmação você terá 
                acesso a área do paciente e poderá solicitar seu óleo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = 'https://app.mariaflor.org.br/AreaAssociados'}
                size="lg"
                variant="hero"
              >
                Clique aqui para se cadastrar
              </Button>
            </div>

            <p className="text-center mt-6 text-muted-foreground">
              Caso tenha dúvidas entre em contato com nosso Núcleo de Acolhimento por mensagem WhatsApp 
              <a href="https://wa.me/5514991549400" className="text-green-600 hover:underline ml-1">
                (14) 99154-9400
              </a>
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-6xl mx-auto">
            <SplitText
              text="Passo a Passo"
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
              tag="h2"
              delay={50}
              duration={0.5}
            />
            <p className="text-lg text-center mb-12 text-foreground">
              Confira abaixo o que é necessário para ter acesso aos produtos da associação.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4 hover:bg-green-200 transition-colors">
                    <step.icon className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{step.label}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block w-full h-0.5 bg-green-200 mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComoSeAssociar;
