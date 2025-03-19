import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaPython } from "react-icons/fa";
import { SiCplusplus, SiFlutter, SiDart, SiFirebase, SiFigma, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import Projeto1 from "../../imagens/projeto1.png";
import Projeto2 from "../../imagens/projeto2.png";
import Projeto3 from "../../imagens/projeto3.png";
import Projeto4 from "../../imagens/projeto4.png";
import Projeto5 from "../../imagens/projeto5.png";
import SloganImage from "../../imagens/slogan.png";



const HomeContainer = styled.div`
    color: white;
    text-align: center;
    width: 100vw;
    background-color: #3B305C;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 250px;
    gap: 50px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
`;

const Presentation = styled.div`
    max-width: 400px;
    background-color: rgba(255, 255, 255, 0.14);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    
    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
    }
`;

const SloganContainer = styled.div`
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const ContentSection = styled.div`
  width: 100%;
  padding: 60px 20px;
  background-color: #121212;
  color: white;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const CarouselContainer = styled.div`
  width: 85%;
  margin: 40px auto;
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .project {
    background: #3b305c;
    padding: 15px;
    border-radius: 10px;
    transition: transform 0.3s;
    max-width: 280px;
    margin: 0 10px;
  }
  .project:hover {
    transform: scale(1.05);
  }
  .project img {
    width: 100%;
    max-height: 150px;
    border-radius: 10px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 30px;
  svg {
    font-size: 45px;
    color: white;
    transition: transform 0.3s, filter 0.3s;
    &:hover {
      transform: scale(1.2);
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
    }
  }
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
`;

const SectionServicos = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.2);
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
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <>
        <HomeContainer>
            <Presentation>
                <h1>Contate-nos</h1>
                <p>Email: <a href="mailto:eziocorporation@gmail.com" style={{ color: 'white' }}>eziocorporation@gmail.com</a></p>
                <p>Whatsapp: <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Clique aqui</a></p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Perfil</a></p>
            </Presentation>
            <SloganContainer>
                <img src={SloganImage} alt="Slogan da Empresa" />
            </SloganContainer>
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
              <p className="description">Website de HG.</p>
            </div>
            <div className="project">
              <img src={Projeto2} alt="Projeto 2" />
              <p className="description">Aplicação para fichas de RPG.</p>
            </div>
            <div className="project">
              <img src={Projeto3} alt="Projeto 3" />
              <p className="description">Sistema web contábil.</p>
            </div>
            <div className="project">
              <img src={Projeto4} alt="Projeto 4" />
              <p className="description">E-commerce.</p>
            </div>
            <div className="project">
              <img src={Projeto5} alt="Projeto 5" />
              <p className="description">Plataforma de ensino interativo.</p>
            </div>
          </Slider>
        </CarouselContainer>
      </ContentSection>

      <ContentSection style={{ background: "#3B305C" }}>
        <h2>Conhecimentos e Experiência</h2>
        <p>Nossa equipe domina tecnologias modernas para desenvolvimento de software.</p>
        <IconContainer>
          <FaReact title="React" />
          <SiJavascript title="JavaScript" />
          <SiFlutter title="Flutter" />
          <SiDart title="Dart" />
          <SiCplusplus title="C++" />
          <FaPython title="Python" />
          <SiFirebase title="Firebase" />
          <SiCss3 title="CSS" />
          <SiHtml5 title="HTML" />
          <SiFigma title="Figma" />
        </IconContainer>
      </ContentSection>

      <ContentSection>
        <h2>Descubra nossos Serviços e entre em contato:</h2>
        <SectionsContainer>
          <SectionServicos>
            <h3>Serviços para Clientes</h3>
            <p>Desenvolvemos soluções personalizadas para o seu negócio.</p>
          </SectionServicos>
          <SectionServicos>
            <h3>Trabalhe Conosco</h3>
            <p>Seja parte da nossa equipe e desenvolva projetos inovadores.</p>
          </SectionServicos>
        </SectionsContainer>
      </ContentSection>
    </>
  );
};

export default Home;
