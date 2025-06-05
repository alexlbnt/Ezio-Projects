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
  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <h2 className="titulo">Nossos Serviços</h2>
        <p className="descricao">
          A Ezio Projects oferece soluções sob medida para transformar ideias em produtos digitais de alta performance.
        </p>

        <div className="cards-servicos">
          {[
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
              desc: 'Sistemas com infraestrutura completa, manutenibilidade e integração com Banco de Dados.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <div className="icone">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/faleconosco" className="seta-link">
                <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="parceria"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Seja um parceiro <FaHandshake /></h2>
          <p>
            É um desenvolvedor freelancer ou tem uma agência e quer expandir seus negócios? Junte-se à Ezio Projects!
          </p>
          <p>
            A Ezio Projects está sempre em busca de parcerias com profissionais e agências que compartilhem nossa paixão por tecnologia e inovação.
          </p>
          <a 
            href="mailto:parcerias@ezioprojects.com" 
            className="btn-contato"
          >
            Entrar em contato
          </a>
          <p>
            Não deixe seu projeto de lado. Chame a gente!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicos;
