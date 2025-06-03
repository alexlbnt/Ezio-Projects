import React, { useState } from 'react';
import './_headerBar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderBar: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className="header-bar">
      <div className="container">
        <div className="logo">
          <span>Ezio</span>Projects
        </div>

        <nav className={`nav-links ${menuAberto ? 'ativo' : ''}`}>
          <a href="#inicio" onClick={fecharMenu}>Início</a>
          <a href="#servicos" onClick={fecharMenu}>Serviços</a>
          <a href="#projetos" onClick={fecharMenu}>Projetos</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
          <button className="btn-contato-mobile" onClick={fecharMenu}>Fale Conosco</button>
        </nav>

        <button className="btn-contato desktop-only">Fale Conosco</button>

        <div className="menu-toggle" onClick={alternarMenu}>
          {menuAberto ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
