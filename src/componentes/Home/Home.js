import React from 'react'; 
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PaginaSobre from '../../imagens/Pagina-Sobre.png';
import Projeto1 from '../../imagens/projeto1.png';
import Projeto2 from '../../imagens/projeto2.png';
import Projeto3 from '../../imagens/projeto3.png';

const HomeContainer = styled.div`
    color: white;
    text-align: center;
    width: 100vw;
    background-image: url(${PaginaSobre});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;

    @media (max-width: 768px) {
        align-items: center;
        padding: 10px;
    }
`;

const Presentation = styled.div`
    max-width: 400px;
    background-color: rgba(255, 255, 255, 0.14);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    margin-left: 120px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        max-width: 100%;
        text-align: center;
    }
`;

const ContentSection = styled.div`
    width: 100%;
    padding: 50px 20px;
    background-color:#121212;
    color: white;
    text-align: center;
    height: 100vh;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const ExperienceSection = styled.div`
    width: 100%;
    padding: 50px 20px;
    background-color: #3B305C;
    color: white;
    text-align: center;
    height: 80vh;
    box-shadow: 0 5px 15px #3B305C;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const EndSection = styled.div`
    width: 100%;
    padding: 50px 20px;
    background-color: #121212;
    color: white;
    text-align: center;
    height: 100vh;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const CarouselContainer = styled.div`
    width: 80%;
    height: 80px;
    margin: 50px auto;
    .slick-slide {
        display: flex;
        justify-content: center;
        margin: 0 20px;
    }
    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        margin: 0 20px;
        background: #3B305C;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 5px 15px #3B305C;
        transition: transform 0.4s ease-in-out;
    }
    .project:hover {
        transform: scale(1.05);
    }
    .project img {
        width: 100%;
        max-height: 200px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    .description {
        margin-top: 10px;
        font-size: 1rem;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
`;

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <HomeContainer>
                <Presentation>
                    <h1>Contate-nos</h1>
                    <p>Email: <a href="mailto:seuemail@exemplo.com" style={{ color: 'white' }}>seuemail@exemplo.com</a></p>
                    <p>ZapZap: <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Clique aqui</a></p>
                    <p>Linkedin: <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Perfil</a></p>
                </Presentation>
            </HomeContainer>
            <ContentSection>
                <h2>Bem-vindo à Ezio Projects – Transformando Ideias em Soluções Digitais</h2>
                <p>
                    Na Ezio Projects, somos apaixonados por tecnologia e inovação. Especializados no desenvolvimento de software sob medida, ajudamos empresas a crescer e se destacar no mercado com soluções digitais eficientes, modernas e personalizadas.
                </p>
                <CarouselContainer>
                    <Slider {...settings}>
                        <div className="project">
                            <img src={Projeto1} alt="Projeto 1" />
                            <div className="description">Website de HG.</div>
                        </div>
                        <div className="project">
                            <img src={Projeto2} alt="Projeto 2" />
                            <div className="description">Aplicação para fichas de RPG.</div>
                        </div>
                        <div className="project">
                            <img src={Projeto3} alt="Projeto 3" />
                            <div className="description">Sistema web contábil.</div>
                        </div>
                    </Slider>
                </CarouselContainer>
            </ContentSection>
            <ExperienceSection>
                <h2>Conhecimentos e Experiência da Nossa Equipe</h2>
                <p>Nossa equipe possui ampla experiência em desenvolvimento de software, trabalhando com tecnologias modernas como React, .Dart, Flutter, C++, Python e muito mais.</p>
            </ExperienceSection>
            <EndSection>
                <h2>Entre em Contato e Solicite um Orçamento</h2>
                <p>Estamos ansiosos para conhecer a sua ideia e transformá-la em um projeto de sucesso. Entre em contato conosco e solicite um orçamento sem compromisso!</p>
            </EndSection>    
        </>
    );
};

export default Home;





