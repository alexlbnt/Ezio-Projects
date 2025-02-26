import React, { useState } from 'react';
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
    align-items: center;
    justify-content: center;
    position: relative;
`;

const RoletaCD = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
    width: 150px;
    height: 150px;
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
`;

const Segmento = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    color: white;
    text-align: center;
    transform: rotate(${props => props.angle}deg) translate(35px) rotate(-${props => props.angle}deg);
`;

const ProjetoDisplay = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const ProjetoImagem = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    border-radius: 10px;
    transition: opacity 0.5s ease-in-out;
`;

const ProjetoDescricao = styled.p`
    margin-top: 20px;
    font-size: 18px;
    max-width: 80%;
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

    const handleClick = () => {
        setProjetoAtivo((projetoAtivo + 1) % projetos.length);
    };

    return (
        <ProjetosContainer>
            <RoletaCD rotation={projetoAtivo * 120} onClick={handleClick}>
                {projetos.map((projeto, index) => (
                    <Segmento key={index} angle={index * 120}>
                        {projeto.nome}
                    </Segmento>
                ))}
            </RoletaCD>
            <ProjetoDisplay>
                <ProjetoImagem key={projetos[projetoAtivo].imagem} src={projetos[projetoAtivo].imagem} alt={projetos[projetoAtivo].nome} />
                <ProjetoDescricao>{projetos[projetoAtivo].descricao}</ProjetoDescricao>
            </ProjetoDisplay>
        </ProjetosContainer>
    );
};

export default Projetos;
