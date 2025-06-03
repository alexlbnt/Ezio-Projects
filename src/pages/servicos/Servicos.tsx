import React from 'react';
import { motion } from 'framer-motion';
import './_servicos.scss';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaHandshake } from 'react-icons/fa';

const Servicos: React.FC = () => {
  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <h2 className="titulo">Nossos Serviços</h2>
        <p className="descricao">
          A Ezio Projects oferece soluções sob medida para transformar ideias em produtos digitais de alta performance.
        </p>

        <div className="cards-servicos">
          {[{
            icon: <FaLaptopCode />, title: 'Desenvolvimento Web', desc: 'Sites e sistemas personalizados com foco em desempenho, segurança e escalabilidade.'
          }, {
            icon: <FaMobileAlt />, title: 'Apps Mobile', desc: 'Aplicativos nativos e híbridos para Android e iOS, com experiência de usuário moderna.'
          }, {
            icon: <FaCloud />, title: 'Sistemas', desc: 'Sistemas com infraestrutura completa, manutenibilidade e integração com Banco de Dados.'
          }].map((item, i) => (
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
            </motion.div>
          ))}
        </div>

        <div className="parceria">
          <h2>Seja um parceiro</h2>
          <p>
            Trabalha como desenvolvedor ou possui uma agência? Junte-se à Ezio Projects e participe de projetos incríveis!
          </p>

          <form
            className="form-parceiro"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const nome = data.get('nome');
              const email = data.get('email');
              const mensagem = data.get('mensagem');
              console.log({ nome, email, mensagem });
              alert('Solicitação enviada com sucesso!');
              e.currentTarget.reset();
            }}
          >
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="mensagem" placeholder="Conte sobre sua experiência ou proposta" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
