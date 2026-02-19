import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoEscrita from '@/assets/logo-escrita.png';

const Footer = () => {
  return (
    <footer className="relative bg-green-100 text-foreground">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="relative pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <img src={logoEscrita} alt="Maria Flor" className="h-14 mb-4" />
            <p className="text-sm font-medium">Maria Flor</p>
            <p className="text-sm">Associação Canábica</p>
            <p className="text-sm mt-2">Marília - São Paulo</p>
            <p className="text-sm mt-2">Seg-Sex das 08h às 17h</p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-base mb-4">Navegação</h3>
            <a href="/por-que-cannabis" className="text-sm hover:text-accent transition-colors mb-2">
              Por que cannabis
            </a>
            <a href="/quem-somos" className="text-sm hover:text-accent transition-colors mb-2">
              Quem Somos
            </a>
            <a href="/como-se-associar" className="text-sm hover:text-accent transition-colors mb-2">
              Como se Associar
            </a>
            <a href="/historia-da-cannabis" className="text-sm hover:text-accent transition-colors mb-2">
              História da Cannabis
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-base mb-4">Contato</h3>
            <a href="tel:+5514991549400" className="text-sm hover:text-accent transition-colors mb-2">
              (14) 991 549 400
            </a>
            <a 
              href="https://app.mariaflor.org.br/AreaAssociados" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Área do Paciente
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-base mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/vemsermariaflor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/vemsermariaflor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://wa.me/5514991549400"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Maria Flor - Associação Canábica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;