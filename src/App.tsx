import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderBar from './components/headerbar/HeaderBar';
import Home from './pages/home/Home';
import Servicos from './pages/servicos/Servicos';
import Projetos from './pages/projetos/Projetos';
import FaleConosco from './pages/faleconosco/FaleConosco';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
