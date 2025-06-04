import React from 'react';
import './_home.scss';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaTools, FaLightbulb } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="home">

      {/* Seção Hero */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desenvolvemos <span>soluções incríveis</span> <br /> para o seu negócio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Da ideia à implementação, criamos experiências digitais que ajudam sua empresa a se destacar no mercado.
          </motion.p>

          <motion.div 
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn primary">Ver Projetos</button>
            <button className="btn secondary">Saiba Mais</button>
          </motion.div>

          <motion.div 
            className="trusted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>Confiada por startups e empresas inovadoras</p>
            <div className="brands">
              <motion.img src="/assets/brand1.svg" alt="Marca 1" whileHover={{ scale: 1.1 }} />
              <motion.img src="/assets/brand2.svg" alt="Marca 2" whileHover={{ scale: 1.1 }} />
              <motion.img src="/assets/brand3.svg" alt="Marca 3" whileHover={{ scale: 1.1 }} />
              <motion.img src="/assets/brand4.svg" alt="Marca 4" whileHover={{ scale: 1.1 }} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Seção de Serviços */}
      <motion.section 
        className="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Seção Fases de Construção (Atualizada) */}
      <motion.section 
        className="fases"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Fases de construção</h2>
          <div className="etapas-grid">
            {[
              {
                numero: '1',
                titulo: 'Análise / Discovery',
                texto: 'Mapeamento de todas as funcionalidades que serão implementadas criando o escopo detalhado.'
              },
              {
                numero: '2',
                titulo: 'Design e Prototipação',
                texto: 'Você poderá ver exatamente como será cada uma das telas do seu projeto antes de iniciarmos o desenvolvimento.'
              },
              {
                numero: '3',
                titulo: 'Desenvolvimento',
                texto: 'Aqui é onde a mágica acontece, tudo que foi mapeado anteriormente ganha vida, e você acompanha tudo via entregas incrementais.'
              },
              {
                numero: '4',
                titulo: 'Testes e homologação',
                texto: 'Antes do lançamento, tudo passa pelo controle de qualidade para que você também, possa avaliar e liberar ao público.'
              }
            ].map((fase, index) => (
              <div className="etapa-card" key={index}>
                <div className="etapa-numero">{fase.numero}</div>
                <h3>{fase.titulo}</h3>
                <p>{fase.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Seção de Projetos */}
      <motion.section 
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
              <motion.img
                key={index}
                src={`/assets/project1.jpg`}
                alt={`Projeto ${proj}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
