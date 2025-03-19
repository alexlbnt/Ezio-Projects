import Projeto1 from "../../imagens/projeto1.png";
import Projeto2 from "../../imagens/projeto2.png";
import Projeto3 from "../../imagens/projeto3.png";
import Projeto4 from "../../imagens/projeto4.png";
import Projeto5 from "../../imagens/projeto5.png";

const projetos = [
    {
        nome: "Website de HG",
        imagem: Projeto1,
        descricao: "Projeto de website para informações sobre jogos.",
        tecnologias: ["React", "Node.js", "MongoDB"],
        funcionalidades: ["Autenticação de usuário", "Sistema de ranking", "API integrada"]
    },
    {
        nome: "App de Fichas de RPG",
        imagem: Projeto2,
        descricao: "Aplicação mobile para gestão de fichas de RPG.",
        tecnologias: ["React Native", "Firebase", "Redux"],
        funcionalidades: ["Sincronização em tempo real", "Suporte a múltiplas fichas", "Exportação de PDFs"]
    },
    {
        nome: "Sistema Contábil",
        imagem: Projeto3,
        descricao: "Sistema web para gerenciamento contábil.",
        tecnologias: ["Vue.js", "Django", "PostgreSQL"],
        funcionalidades: ["Gestão financeira", "Relatórios dinâmicos", "Segurança avançada"]
    },
    {
        nome: "E-commerce",
        imagem: Projeto4,
        descricao: "Loja virtual completa.",
        tecnologias: ["Next.js", "Stripe", "MySQL"],
        funcionalidades: ["Pagamentos online", "Carrinho persistente", "Sistema de recomendações"]
    },
    {
        nome: "Plataforma de ensino",
        imagem: Projeto5,
        descricao: "Plataforma de ensino interativo.",
        tecnologias: ["Angular", "NestJS", "AWS"],
        funcionalidades: ["Aulas interativas", "Gamificação", "Certificação automatizada"]
    }
];

export default projetos;
