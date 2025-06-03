import React from 'react';
import './_home.scss';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaTools, FaLightbulb } from 'react-icons/fa';


const Home: React.FC = () => {
  return (
    <div className="home">

      {/* Seção Hero */}
      <section className="hero">
        <div className="container">
          <h1>
            Desenvolvemos <span>soluções incríveis</span> <br /> para o seu negócio.
          </h1>
          <p>
            Da ideia à implementação, criamos experiências digitais que ajudam sua empresa a se destacar no mercado.
          </p>
          <div className="buttons">
            <button className="btn primary">Ver Projetos</button>
            <button className="btn secondary">Saiba Mais</button>
          </div>

          <div className="trusted">
            <p>Confiada por startups e empresas inovadoras</p>
            <div className="brands">
              <img src="/assets/brand1.svg" alt="Marca 1" />
              <img src="/assets/brand2.svg" alt="Marca 2" />
              <img src="/assets/brand3.svg" alt="Marca 3" />
              <img src="/assets/brand4.svg" alt="Marca 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="services">
        <div className="container">
          <h2>O que fazemos</h2>
          <p>Na Ezio Projects, projetamos soluções digitais, criamos experiências inovadoras e evoluímos seu negócio com tecnologia de ponta.</p>

          <div className="cards">
            <div className="card">
              <FaCode />
              <h3>Desenvolvimento Web</h3>
              <p>Soluções sob medida com tecnologias modernas e escaláveis.</p>
            </div>
            <div className="card">
              <FaMobileAlt />
              <h3>Apps Mobile</h3>
              <p>Aplicativos nativos e híbridos para Android e iOS com alta performance.</p>
            </div>
            <div className="card">
              <FaPaintBrush />
              <h3>Design UI/UX</h3>
              <p>Interfaces intuitivas e experiências que encantam usuários.</p>
            </div>
            <div className="card">
              <FaLightbulb />
              <h3>Consultoria Técnica</h3>
              <p>Acompanhamento estratégico para transformar sua ideia em realidade.</p>
            </div>
            <div className="card">
              <FaCloud />
              <h3>Soluções em Nuvem</h3>
              <p>Infraestrutura confiável e escalável para seu sistema.</p>
            </div>
            <div className="card">
              <FaTools />
              <h3>Manutenção e Suporte</h3>
              <p>Atualizações, monitoramento e segurança contínuos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="projects">
        <div className="container">
          <h2>Nossos Projetos</h2>
          <p>Veja algumas soluções que desenvolvemos para nossos clientes.</p>

          <div className="grid">
            <img src="/assets/project1.jpg" alt="Projeto 1" />
            <img src="/assets/project1.jpg" alt="Projeto 2" />
            <img src="/assets/project1.jpg" alt="Projeto 3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
