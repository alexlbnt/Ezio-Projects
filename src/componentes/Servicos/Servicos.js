import React from 'react'; 
import styled from 'styled-components';

const PageContainer = styled.div`
    color: white;
    text-align: center;
    width: 100vw;
    background-color: #3B305C;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Section = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    width: 80%;
    max-width: 800px;
`;

const Servicos = () => {
    return (
        <PageContainer>
            <h1>Ezio Projects</h1>
            <Section>
                <h2>Serviços para Clientes</h2>
                <p>Oferecemos soluções de software sob medida para atender às necessidades do seu negócio. Entre em contato para saber mais!</p>
            </Section>
            <Section>
                <h2>Trabalhe Conosco</h2>
                <p>Você é um programador com ideias inovadoras? Junte-se a nós para desenvolver projetos incríveis. Envie sua proposta!</p>
            </Section>
        </PageContainer>
    );
};

export default Servicos;
