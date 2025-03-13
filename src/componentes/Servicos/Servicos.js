import React from 'react'; 
import styled from 'styled-components';

const PageContainer = styled.main`
    color: white;
    text-align: center;
    width: 100vw;
    background-color: #3B305C;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const SectionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 900px;
`;

const SectionServiços = styled.section`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    width: 45%;
    max-width: 400px;
    transition: transform 0.3s ease-in-out, background-color 0.3s;

    &:hover {
        transform: scale(1.05);
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;


const ResponsiveText = styled.p`
    font-size: 1rem;
    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

const Servicos = () => {
    return (
        <PageContainer>
            <SectionsContainer>
                <SectionServiços>
                    <h2>Serviços para Clientes</h2>
                    <ResponsiveText>
                        Oferecemos soluções de software sob medida para atender às necessidades do seu negócio. Entre em contato para saber mais!
                    </ResponsiveText>
                </SectionServiços>
                <SectionServiços>
                    <h2>Trabalhe Conosco</h2>
                    <ResponsiveText>
                        Você é um programador com ideias inovadoras? Junte-se a nós para desenvolver projetos incríveis. Envie sua proposta!
                    </ResponsiveText>
                </SectionServiços>
            </SectionsContainer>
        </PageContainer>
    );
};

export default Servicos;
