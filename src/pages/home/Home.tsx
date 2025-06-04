import React from 'react';
import './_home.scss';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaTools,
  FaLightbulb,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import {
  IoLogoJavascript,
  IoLogoIonic
} from 'react-icons/io5';
import {
  SiFlutter,
  SiDart,
  SiCplusplus,
  SiMongodb
} from 'react-icons/si';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const technologies = [
    { Icon: FaReact, name: 'React' },
    { Icon: IoLogoJavascript, name: 'JavaScript' },
    { Icon: SiFlutter, name: 'Flutter' },
    { Icon: SiDart, name: 'Dart' },
    { Icon: SiCplusplus, name: 'C++' },
    { Icon: FaPython, name: 'Python' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3Alt, name: 'CSS3' },
    { Icon: IoLogoIonic, name: 'Ionic' },
  ];

  const techIconsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4, 
      },
    },
  };

  const techIconItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="home">
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        <div className="container">
          <div className="hero-content-wrapper">
            <motion.h1 variants={heroItemVariants}>
              Transformamos Ideias em <br /> <span>Software Inovador</span><br /> para o seu Sucesso.
            </motion.h1>

            <motion.p variants={heroItemVariants}>
              Desde a concepção até a entrega, criamos soluções digitais personalizadas que elevam sua empresa a novos patamares.
            </motion.p>

            <motion.div
              className="buttons"
              variants={heroItemVariants}
            >
              <Link to="/projetos">
                <button className="btn primary">Nossos Projetos</button>
              </Link>
              <a href="#services" className="btn secondary">
                O Que Fazemos
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Atualizado para usar Hero-Image.jpg */}
            <img 
              src="/assets/Hero-Image.png" 
              alt="Imagem principal da seção Hero" 
              className="hero-main-image" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Seção de Tecnologias Atualizada */}
      <motion.section
        className="technologies-showcase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <motion.p
            className="technologies-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nossa equipe domina tecnologias modernas para desenvolvimento de software.
          </motion.p>
          <motion.div
            className="technologies-icons"
            variants={techIconsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {technologies.map(({ Icon, name }) => (
              <motion.div
                key={name}
                className="technology-icon-wrapper"
                variants={techIconItemVariants}
                title={name}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            O que fazemos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Na Ezio Projects, projetamos soluções digitais, criamos experiências inovadoras e evoluímos seu negócio com tecnologia de ponta.
          </motion.p>

          <div className="cards">
            {[
              { icon: <FaCode />, title: 'Desenvolvimento Web', text: 'Soluções sob medida com tecnologias modernas e escaláveis.' },
              { icon: <FaMobileAlt />, title: 'Apps Mobile', text: 'Aplicativos nativos e híbridos para Android e iOS com alta performance.' },
              { icon: <FaPaintBrush />, title: 'Design UI/UX', text: 'Interfaces intuitivas e experiências que encantam usuários.' },
              { icon: <FaLightbulb />, title: 'Consultoria Técnica', text: 'Acompanhamento estratégico para transformar sua ideia em realidade.' },
              { icon: <FaCloud />, title: 'Soluções em Nuvem', text: 'Infraestrutura confiável e escalável para seu sistema.' },
              { icon: <FaTools />, title: 'Manutenção e Suporte', text: 'Atualizações, monitoramento e segurança contínuos.' },
            ].map((service, index) => (
              <motion.div
                className="card"
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ translateY: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.35)" }}
              >
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="fases"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Fases de construção</h2>
          <div className="etapas-grid">
            {[
              { numero: '1', titulo: 'Análise / Discovery', texto: 'Mapeamento de todas as funcionalidades que serão implementadas criando o escopo detalhado.' },
              { numero: '2', titulo: 'Design e Prototipação', texto: 'Você poderá ver exatamente como será cada uma das telas do seu projeto antes de iniciarmos o desenvolvimento.' },
              { numero: '3', titulo: 'Desenvolvimento', texto: 'Aqui é onde a mágica acontece, tudo que foi mapeado anteriormente ganha vida, e você acompanha tudo via entregas incrementais.' },
              { numero: '4', titulo: 'Testes e homologação', texto: 'Antes do lançamento, tudo passa pelo controle de qualidade para que você também, possa avaliar e liberar ao público.' }
            ].map((fase, index) => (
              <motion.div
                className="etapa-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ translateY: -6 }}
              >
                <div className="etapa-numero">{fase.numero}</div>
                <h3>{fase.titulo}</h3>
                <p>{fase.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nossos Projetos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Veja algumas soluções que desenvolvemos para nossos clientes.
          </motion.p>

          <div className="grid">
            {[1, 2, 3].map((proj, index) => (
              <Link key={index} to="/projetos" className="project-link-wrapper">
                <motion.img
                  src={`/assets/project${proj}.jpg`}
                  alt={`Projeto ${proj}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;