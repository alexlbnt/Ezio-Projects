import React, { useEffect, useState } from 'react';
import './_home.scss';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
  FaLightbulb,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import {
  SiFlutter,
  SiDart,
  SiCplusplus,
  SiTypescript,
  SiFigma,
} from 'react-icons/si';
import { Link } from 'react-router-dom';

// tsparticles v3+
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const Home: React.FC = () => {
  const [init, setInit] = useState(false);

  // Inicializa o engine do tsparticles (padrão v3+)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  // Config de partículas para cobrir todo o fundo
  const particlesOptions: any = {
    fullScreen: { enable: true, zIndex: 0 }, // cobre a tela toda atrás do conteúdo
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#7f5af0' },
      links: {
        color: '#7f5af0',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        outModes: { default: 'bounce' },
      },
      number: { value: 60, density: { enable: true, area: 800 } },
      opacity: { value: 0.4 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const technologies = [
    { Icon: FaReact, name: 'React' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiFlutter, name: 'Flutter' },
    { Icon: SiDart, name: 'Dart' },
    { Icon: SiCplusplus, name: 'C++' },
    { Icon: FaPython, name: 'Python' },
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3Alt, name: 'CSS3' },
    { Icon: SiFigma, name: 'Figma' }
  ];

  return (
    <div className="home">
      {/* Canvas de partículas cobrindo TODA a Home (fundo) */}
      {init && <Particles id="tsparticles" options={particlesOptions} />}

      {/* Conteúdo principal sobre as partículas */}
      <div className="home-content">
        
        {/* HERO */}
        <motion.section
          className="hero"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="container">
            <div className="hero-content-wrapper">
              <motion.h1 variants={heroItemVariants} initial="hidden" animate="visible">
                Transformamos Ideias em <br /> <span>Software Inovador</span><br /> para o seu Sucesso.
              </motion.h1>

              <motion.p variants={heroItemVariants} initial="hidden" animate="visible">
                Desde a concepção até a entrega, criamos soluções digitais personalizadas que elevam sua empresa a novos patamares.
              </motion.p>

              <motion.div className="buttons" variants={heroItemVariants} initial="hidden" animate="visible">
                <Link to="/projetos">
                  <button className="btn primary">Nossos Projetos</button>
                </Link>
                <a href="#services" className="btn secondary">O Que Fazemos</a>
              </motion.div>
            </div>

            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="/assets/Hero-Image.png" alt="Imagem principal" className="hero-main-image" />
            </motion.div>
          </div>
        </motion.section>

        {/* TECNOLOGIAS */}
        <motion.section
          className="technologies-showcase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              Nossa equipe domina tecnologias modernas para desenvolvimento de software.
              <br />
              <br />
              <br />
            </motion.p>
            <div className="technologies-icons">
              {technologies.map(({ Icon, name }, i) => (
                <motion.div
                  key={name}
                  className="technology-icon-wrapper"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SERVIÇOS */}
        <motion.section
          id="services"
          className="services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              O que fazemos
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Na Ezio Projects, projetamos soluções digitais, criamos experiências inovadoras e evoluímos seu negócio com tecnologia de ponta.
            </motion.p>

            <div className="cards">
              {[
                { icon: <FaCode />, title: 'Desenvolvimento Web', text: 'Soluções sob medida com tecnologias modernas e escaláveis.' },
                { icon: <FaMobileAlt />, title: 'Apps Mobile', text: 'Aplicativos nativos e híbridos para Android e iOS com alta performance.' },
                { icon: <FaPaintBrush />, title: 'Design UI/UX', text: 'Interfaces intuitivas e experiências que encantam usuários.' },
                { icon: <FaLightbulb />, title: 'Consultoria Técnica', text: 'Transforme sua ideia em realidade com orientação estratégica.' },
                { icon: <FaTools />, title: 'Equipe de Devs', text: 'Fornecemos a equipe necessária para desenvolver seus projetos.' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="card"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ translateY: -10, boxShadow: "0 12px 24px rgba(0,0,0,0.4)" }}
                >
                  {s.icon}
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FASES */}
        <motion.section
          className="fases"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <div className="container">
            <h2>Fases de construção</h2>
            <div className="etapas-grid">
              {[
                { numero: '1', titulo: 'Análise', texto: 'Mapeamento de todas as funcionalidades e escopo detalhado.' },
                { numero: '2', titulo: 'Design e Prototipação', texto: 'Visualize as telas antes do desenvolvimento.' },
                { numero: '3', titulo: 'Desenvolvimento', texto: 'Implementação com entregas incrementais.' },
                { numero: '4', titulo: 'Testes e Homologação', texto: 'Controle de qualidade antes do lançamento.' }
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="etapa-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ translateY: -6 }}
                >
                  <div className="etapa-numero">{f.numero}</div>
                  <h3>{f.titulo}</h3>
                  <p>{f.texto}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PROJETOS */}
        <motion.section
          className="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="container">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              Nossos Projetos
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Veja algumas soluções que desenvolvemos para nossos clientes.
            </motion.p>

            <div className="grid">
              {[
                { id: 1, title: "Sistema de Gestão de Estoque", desc: "Painel analítico com tabelas interativas.", techs: ["React", "SQL"], img: "/assets/project1.jpg" },
                { id: 2, title: "Site Empresa Contabil", desc: "Portfolio e Marketing.", techs: ["React", "TypeScript"], img: "/assets/project2.jpg" },
                { id: 3, title: "App Fichas de RPG", desc: "Aplicativo mobile prático e intuitivo.", techs: ["Flutter", "Firebase"], img: "/assets/project3.jpg" }
              ].map((p, i) => (
                <motion.div
                  key={p.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Link to="/projetos" className="project-link-wrapper">
                    <img src={p.img} alt={p.title} />
                    <div className="overlay">
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <div className="tags">
                        {p.techs.map((t, i) => (
                          <span key={i}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Home;
