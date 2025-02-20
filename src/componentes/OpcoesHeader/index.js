import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcao = styled.li`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    min-width: 130px;
    color: #ffffff;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }
`;

const Opcoes = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const textoOpcoes = [
    { nome: 'Home', caminho: '/' },
    { nome: 'Projetos', caminho: '/Projetos' },
    { nome: 'Serviços', caminho: '/Serviços' },
];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((opcao) => (
                <Opcao key={opcao.nome}>
                    <Link to={opcao.caminho} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {opcao.nome}
                    </Link>
                </Opcao>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;
