import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./_projetos.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projetos = [
  {
    titulo: "Sistema de Gestão de Estoque - Estoque Safe",
    descricao:
      "Aplicação web full stack para pequenas empresas controlarem produtos, entradas e saídas com dashboards interativos.",
    tecnologias: ["React", "TypeScript", "SQL"],
    imagem: "/assets/project1.jpg",
    github: "https://github.com/alexlbnt/Controle-de-Estoque",
    link: "#",
  },
  {
    titulo: "Site empresa Master Assessoria Contábil",
    descricao: "Website moderno, que inspira confiança e estabelece sua autoridade no mercado.",
    tecnologias: ["React", "TypeScript", "SCSS"],
    imagem: "/assets/project2.jpg",
    github: "https://github.com/alexlbnt/Master-AC",
    link: "#",
  },
  {
    titulo: "Aplicativo OsRPjas - Fichas de RPG",
    descricao:
      "App mobile prático e acessível para jogadores de RPG online, com fichas rápidas e usabilidade focada.",
    tecnologias: ["Flutter", "Firebase", "Dart"],
    imagem: "/assets/project3.jpg",
    github: "https://github.com/jonathastfm/ezio_projects",
    link: "#",
  },
  {
    titulo: "Melodia — App de Música",
    descricao:
      "Aplicativo de musicas ambientes customizaveis. Experiência fluida para descoberta e escuta contínua.",
    tecnologias: ["React Native", "TypeScript", "Expo", "Firebase", "Algolia"],
    imagem: "/assets/project4-melodia.jpg",
    github: "https://github.com/seu-usuario/melodia-app",
    link: "#",
  },
  {
    titulo: "Aurora — Loja de Roupas Online",
    descricao:
      "E-commerce de moda com catálogo dinâmico e painel de administração para estoque e pedidos.",
    tecnologias: ["Next.js", "React", "TypeScript", "Stripe", "SCSS"],
    imagem: "/assets/project5-boutique.jpg",
    github: "https://github.com/seu-usuario/boutique-nova",
  },
];

const Projetos: React.FC = () => {

  const resetTransform = (cardRef: React.RefObject<HTMLDivElement>) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section className="projetos">
      <div className="container">
        <motion.h2
          className="titulo"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Nossos Projetos
        </motion.h2>

        <motion.p
          className="descricao"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Confira alguns dos projetos mais recentes desenvolvidos pela Ezio Projects. Cada projeto foi desenvolvido com <span>inovação</span>,{" "}
          <span>criatividade</span> e foco total na{" "}
          <span>experiência do usuário</span>.
        </motion.p>

        <div className="lista-projetos">
          {projetos.map((projeto, index) => {
            const cardRef = useRef<HTMLDivElement>(null);

            return (
              <motion.div
                ref={cardRef}
                className="card-projeto"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{ backgroundImage: `url(${projeto.imagem})` }}
              >
                <div className="overlay">
                  <h3>{projeto.titulo}</h3>
                  <p>{projeto.descricao}</p>

                  <ul>
                    {projeto.tecnologias.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>

                  <div className="links">
                    <a href={projeto.github} target="_blank" rel="noreferrer">
                      <FaGithub /> Código
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
