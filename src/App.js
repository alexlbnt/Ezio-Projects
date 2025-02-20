import Header from './componentes/Header';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Projetos from './componentes/Projetos/Projetos';
import Servicos from './componentes/Servicos/Servicos';
import Footer from './componentes/Footer/Footer';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        overflow-x: hidden; 
    }

    li {
        list-style: none;
    }
`;

const AppContainer = styled.div`
    width: 100%; 
    height: 100%;
    background-image: linear-gradient(90deg,rgb(0, 0, 0) 35%,rgb(76, 48, 92));

    max-width: 100%;
    overflow: hidden;
`;

function App() {
    return (
        <Router>
            <AppContainer>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Projetos" element={<Projetos />} />
                    <Route path="/Serviços" element={<Servicos />} />
                </Routes>
                <Footer />
            </AppContainer>
        </Router>
    );
}


export default App;

