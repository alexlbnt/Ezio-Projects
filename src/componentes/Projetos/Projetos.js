import React, { useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import Projeto1 from '../../imagens/projeto1.png';
import Projeto2 from '../../imagens/projeto2.png';
import Projeto3 from '../../imagens/projeto3.png';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ProjetosContainer = styled.div`
    color: white;
    text-align: center;
    width: 100vw;
    background-color: #121212;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
`;

const RoletaCD = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    background: conic-gradient(
        rgb(83, 0, 0) 0deg 120deg,
        rgb(23, 0, 32) 120deg 240deg,
        #003632 240deg 360deg
    );
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    margin-bottom: 20px;

    &:hover {
        box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
    }
`;

const ProjetoDisplay = styled.div`
    width: 90vw;
    max-width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 0.5s ease-in-out;
    text-align: center;
`;

const ProjetoImagem = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const ProjetoDescricao = styled.p`
    margin-top: 20px;
    font-size: 16px;
    max-width: 90%;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const projetos = [
    {
        nome: "Website de HG.",
        imagem: Projeto1,
        descricao: "Projeto de website página de informações sobre um sistema de jogos."
    },
    {
        nome: "Aplicação para fichas de RPG.",
        imagem: Projeto2,
        descricao: "Aplicação mobile para gestão fichas de jogos de RPG."
    },
    {
        nome: "Sistema web contábil.",
        imagem: Projeto3,
        descricao: "Sistema web para gerência de empresa contábil."
    }
];

const Projetos = () => {
    const [projetoAtivo, setProjetoAtivo] = useState(0);

    const handleClick = useCallback(() => {
        setProjetoAtivo((projetoAtivo + 1) % projetos.length);
    }, [projetoAtivo]);

    return (
        <ProjetosContainer>
            <RoletaCD rotation={projetoAtivo * 120} onClick={handleClick} aria-label="Trocar projeto">
                🔄
            </RoletaCD>
            <ProjetoDisplay>
                <ProjetoImagem key={projetos[projetoAtivo].imagem} src={projetos[projetoAtivo].imagem} alt={projetos[projetoAtivo].nome} />
                <ProjetoDescricao>{projetos[projetoAtivo].descricao}</ProjetoDescricao>
            </ProjetoDisplay>
        </ProjetosContainer>
    );
};

export default Projetos;
