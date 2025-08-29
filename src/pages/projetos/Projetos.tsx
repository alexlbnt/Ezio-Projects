import React from "react";
import { motion } from "framer-motion";
import "./_projetos.scss";
import { FaGithub } from "react-icons/fa";

const projetos = [
  {
    titulo: "Sistema de Gestão de Estoque - Estoque Safe",
    descricao:
      "Aplicação web full stack desenvolvida para pequenas empresas gerenciarem produtos, entradas e saídas com autenticação e painéis interativos.",
    tecnologias: ["React", "TypeScript", "SQL"],
    imagem: "/assets/project1.jpg", 
    github: "https://github.com/alexlbnt/Controle-de-Estoque",

  },
  {
    titulo: "Site empresa Master Assessoria Contábil",
    descricao:
      "Site portfolio focado em mostra de resultados para clientes.",
    tecnologias: ["React", "TypeScript", "SCSS"],
    imagem: "/assets/project2.jpg", 
    github: "https://github.com/alexlbnt/Master-AC", 

  },
  {
    titulo: "Aplicativo OsRPjas - Fichas de RPG para jogos online",
    descricao:
      "Aplicativo focado em portatilidade, acessibilidade e praticidade.",
    tecnologias: ["Flutter", "Firebase", "Dart"],
    imagem: "/assets/project3.jpg", 
    github: "https://github.com/jonathastfm/ezio_projects", 

  },
];

const Projetos: React.FC = () => {
  return (
    <section className="projetos">
      <div className="container">
        <h2 className="titulo">Nossos Projetos</h2>
        <p className="descricao">
          Confira alguns dos projetos mais recentes desenvolvidos pela Ezio Projects. Cada solução foi pensada para entregar alto desempenho, usabilidade e impacto real para nossos clientes.
        </p>
        <div className="lista-projetos">
          {projetos.map((projeto, index) => (
            <motion.div
              className="card-projeto"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={projeto.imagem} alt={projeto.titulo} />
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <ul>
                {projeto.tecnologias.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="links">
                <a href={projeto.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
