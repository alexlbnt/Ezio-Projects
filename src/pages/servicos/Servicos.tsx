import React from 'react';
import { motion } from 'framer-motion';
import './_servicos.scss';
import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCloud, 
  FaHandshake, 
  FaArrowRight 
} from 'react-icons/fa';

const Servicos: React.FC = () => {
  const servicos = [
    {
      icon: <FaLaptopCode />,
      title: 'Desenvolvimento Web',
      desc: 'Sites e sistemas personalizados com foco em desempenho, segurança e escalabilidade.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Apps Mobile',
      desc: 'Aplicativos nativos e híbridos para Android e iOS, com experiência de usuário moderna.'
    },
    {
      icon: <FaCloud />,
      title: 'Sistemas',
      desc: 'Infraestrutura completa, integração com bancos de dados e manutenção contínua.'
    },
  ];

  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <motion.h2 
          className="titulo"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossos Serviços
        </motion.h2>
        <motion.p 
          className="descricao"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A Ezio Projects oferece soluções sob medida para transformar ideias em produtos digitais de alta performance.
        </motion.p>

        <motion.div 
          className="cards-servicos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {servicos.map((item, i) => (
            <motion.div
              key={i}
              className="card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="icone">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/faleconosco" className="seta-link">
                <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="parceria"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Seja um parceiro <FaHandshake /></h2>
          <p>
            É um desenvolvedor freelancer ou tem uma agência e quer expandir seus negócios? Junte-se à Ezio Projects!
          </p>
          <p>
            Buscamos parceiros que compartilhem nossa paixão por tecnologia e inovação.
          </p>
          <Link
            to="/faleconosco"
            className="btn-contato"
            aria-label="Entrar em contato com a Ezio Projects"
          >
            Entrar em contato
          </Link>
          <p className="frase-final">
            Seu projeto merece sair do papel. Conte com a nossa equipe!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicos;
