import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import projetos from "./projetosData";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: black;
    font-family: 'Poppins', sans-serif;
    padding: 80px 20px;
    color: white;
`;

const Title = styled(motion.h2)`
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 60px;
    text-align: center;
    background: linear-gradient(90deg, rgb(255, 255, 255), #3b305c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const ProjetosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 1000px;
    margin: auto;
`;

const ProjetoCard = styled(motion.div)`
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.1);
    width: 100%;
    max-width: 100%;
    flex-direction: ${({ alternar }) => (alternar ? "row-reverse" : "row")};
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Image = styled(motion.img)`
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    margin: 20px;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
`;

const Description = styled.div`
    font-size: 1.2rem;
    color: #e0e0e0;
    line-height: 1.5;
    flex: 1;
    text-align: left;
    max-width: 500px;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #ffffff;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 5px 0;
    }
`;

const Projetos = () => {
    return (
        <Container>
            <Title 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                Conheça Nossos Projetos
            </Title>
            <ProjetosWrapper>
                {projetos.map((projeto, index) => (
                    <ProjetoCard 
                        key={index} 
                        alternar={index % 2 === 1}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        role="article"
                        aria-labelledby={`projeto-${index}`}
                        tabIndex={0}
                    >
                        <Image 
                            src={projeto.imagem} 
                            alt={`Imagem do projeto ${projeto.nome}`} 
                            loading="lazy" 
                            aria-hidden="true" 
                        />
                        <Description>
                            <h3 id={`projeto-${index}`}>{projeto.nome}</h3>
                            <p>{projeto.descricao}</p>
                            <strong>Tecnologias utilizadas:</strong>
                            <ul>
                                {projeto.tecnologias.map((tech, i) => (
                                    <li key={i}>✅ {tech}</li>
                                ))}
                            </ul>
                            <strong>Funcionalidades principais:</strong>
                            <ul>
                                {projeto.funcionalidades.map((func, i) => (
                                    <li key={i}>⚡ {func}</li>
                                ))}
                            </ul>
                        </Description>
                    </ProjetoCard>
                ))}
            </ProjetosWrapper>
        </Container>
    );
};


export default Projetos;
