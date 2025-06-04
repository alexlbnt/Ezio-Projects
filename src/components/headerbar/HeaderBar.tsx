import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './_headerBar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
          <Link to="/" onClick={fecharMenu}>
            <span>Ezio</span>Projects
          </Link>
        </div>

        <AnimatePresence>
          {menuAberto && (
            <motion.nav
              className="nav-links ativo"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/" onClick={fecharMenu}>Início</Link>
              <Link to="/servicos" onClick={fecharMenu}>Serviços</Link>
              <Link to="/projetos" onClick={fecharMenu}>Projetos</Link>
              <Link to="/faleconosco" className="btn-contato-mobile" onClick={fecharMenu}>
                Fale Conosco
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>

        <nav className="nav-links desktop-only">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/projetos">Projetos</Link>
        </nav>

        <Link to="/faleconosco" className="btn-contato desktop-only" onClick={fecharMenu}>
          Fale Conosco
        </Link>

        <div className="menu-toggle" onClick={alternarMenu}>
          {menuAberto ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
