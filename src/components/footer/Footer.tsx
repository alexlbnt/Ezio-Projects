import './_footer.scss';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          {/* AQUI A MODIFICAÇÃO: alterado o src da imagem */}
          <img src="/assets/LogoE.svg" alt="Ezio Projects" className="logo" />
          <div className="socials">
            <a href="https://www.instagram.com/ezioprojects" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/seuperfil" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.linkedin.com/company/seuperfil" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="bottom">
          <p>© {new Date().getFullYear()} Ezio Projects. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;