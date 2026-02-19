import { NavLink } from 'react-router-dom';
import CircularText from '../animations/CircularText';
import logoEscrita from '@/assets/logo-branca.png';

interface HeaderProps {
  backgroundImage?: string;
}

const Header = ({ backgroundImage }: HeaderProps) => {
  const navItems = [
    { to: '/por-que-cannabis', label: 'Por que cannabis' },
    { to: '/quem-somos', label: 'Quem Somos' },
    { to: '/como-se-associar', label: 'Como se Associar' },
    { to: '/historia-da-cannabis', label: 'História da Cannabis' },
    { to: 'https://app.mariaflor.org.br/AreaAssociados', label: 'Área do paciente', external: true },
  ];

  return (
    <header 
      className="relative w-full min-h-[450px] md:min-h-[500px] bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      }}
    >
      {/* NOVO GRADIENTE: Esfumado mais intenso, escurecendo a imagem */}
      {/* from-green-900/60: Começa com um verde bem escuro e opaco. */}
      {/* via-green-700/40: Passa por um verde escuro menos opaco no meio. */}
      {/* to-green-200/50: Termina com um verde claro mais presente para a transição. */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-green-700/40 to-green-200/50" />
      
      {/* Navigation - Mantido com text-white para contraste com fundo escuro da imagem */}
      <nav className="relative z-10 flex flex-col items-center gap-6 px-4 py-6">
        <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 flex-wrap">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-accent transition-colors px-2 md:px-3 py-2 rounded-lg hover:bg-white/10 text-xs md:text-sm lg:text-base whitespace-nowrap"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-white font-medium transition-colors px-2 md:px-3 py-2 rounded-lg text-xs md:text-sm lg:text-base whitespace-nowrap ${
                    isActive ? 'bg-accent/20 text-accent' : 'hover:text-accent hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </div>

        {/* Logo - centralizada, com z-20 para destaque e mt-16 para descer */}
        <div className="mt-16 z-20"> 
          <NavLink to="/por-que-cannabis">
            <img src={logoEscrita} alt="Maria Flor" className="h-20 md:h-28 lg:h-32" />
          </NavLink>
        </div>
      </nav>

      {/* Circular Text Animation - z-10 para ficar acima do overlay */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
        <CircularText 
          text="MARIA*FLOR*ASSOCIAÇÃO*CANÁBICA*"
          spinDuration={20}
          onHover="speedUp"
          className="text-white"
        />
      </div>
      {/* Onda: z-0 para ficar no fundo, abaixo do conteúdo */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
              <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path 
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-green-50" // <--- MUDANÇA AQUI: Cor da onda combinando com o fundo da seção seguinte
                ></path>
              </svg>
            </div>
          </header>
        );
      };

export default Header;