import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderBar from './components/headerbar/HeaderBar';
import Home from './pages/home/Home';
import Servicos from './pages/servicos/Servicos';
import Projetos from './pages/projetos/Projetos';

function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
}

export default App;
