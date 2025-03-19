import React from 'react'; 
import styled from 'styled-components';
import ServicosCliente from "../../imagens/Serviços-Clientes.png";

const Page = styled.main`
    color: white;
    text-align: center;
    width: 100vw;
    background-color: #2C2540;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    gap: 50px;
    font-family: Arial, sans-serif;
`;

const ImageContainer = styled.div`
    width: 85%;
    max-width: 900px;
    margin-bottom: 20px;

    & img {
        width: 100%;
        border-radius: 12px;
    }
`;

const Section = styled.section`
    background: rgba(255, 255, 255, 0.15);
    padding: 50px;
    border-radius: 12px;
    width: 85%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);

    @media (max-width: 600px) {
        width: 95%;
        padding: 40px;
    }
`;

const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 2.2rem;
    color: #FFD700;
`;

const Text = styled.p`
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 25px;
    max-width: 750px;
`;

const List = styled.ul`
    text-align: left;
    width: 100%;
    max-width: 750px;
    font-size: 1.2rem;
    margin-bottom: 25px;
    list-style: none;
    padding-left: 0;

    & li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    & li::before {
        content: '✔';
        color: #FFD700;
        font-weight: bold;
        margin-right: 10px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 500px;
`;

const Input = styled.input`
    padding: 14px;
    border-radius: 8px;
    border: none;
    font-size: 1.1rem;
    width: 100%;
`;

const Button = styled.button`
    padding: 14px;
    border-radius: 8px;
    border: none;
    background-color: #FFD700;
    color: #2C2540;
    font-size: 1.3rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #E6C200;
    }
`;

const Servicos = () => {
    return (
        <>
            <Page>
                <ImageContainer>
                    <img src={ServicosCliente} alt="Serviços para Clientes" />
                </ImageContainer>
                <Section>
                    <Title>❕ Serviços para Clientes</Title>
                    <Text>
                        Desenvolvemos soluções inovadoras para o seu negócio! Oferecemos serviços personalizados para atender às suas necessidades.
                    </Text>
                    <List>
                        <li>Desenvolvimento de software sob medida</li>
                        <li>Consultoria tecnológica</li>
                        <li>Integração de sistemas</li>
                        <li>Suporte técnico especializado</li>
                        <li>Criação de aplicativos móveis</li>
                    </List>
                    <Text>Preencha o formulário abaixo e nossa equipe entrará em contato com você:</Text>
                    <Form>
                        <Input type="text" placeholder="Nome Completo" required />
                        <Input type="email" placeholder="Email" required />
                        <Input type="text" placeholder="Nome da Empresa" required />
                        <Input type="text" placeholder="Descrição do Projeto" required />
                        <Button type="submit">Solicitar Contato</Button>
                    </Form>
                </Section>
            </Page>

            <Page>
                <ImageContainer>
                    <img src={ServicosCliente} alt="Trabalhe Conosco" />  
                </ImageContainer>
                <Section>
                    <Title>❕ Trabalhe Conosco</Title>
                    <Text>
                        Você é um programador apaixonado por tecnologia? Estamos em busca de talentos inovadores para se juntar à nossa equipe.
                    </Text>
                    <List>
                        <li>Ambiente de trabalho dinâmico</li>
                        <li>Projetos desafiadores e inovadores</li>
                        <li>Oportunidades de crescimento profissional</li>
                        <li>Colaboração com uma equipe experiente</li>
                        <li>Flexibilidade e trabalho remoto</li>
                    </List>
                    <Text>Envie seus dados e venha fazer parte do nosso time:</Text>
                    <Form>
                        <Input type="text" placeholder="Nome Completo" required />
                        <Input type="email" placeholder="Email" required />
                        <Input type="text" placeholder="LinkedIn ou Portfólio" required />
                        <Input type="text" placeholder="Por que quer trabalhar conosco?" required />
                        <Button type="submit">Enviar Candidatura</Button>
                    </Form>
                </Section>
            </Page>
        </>
    );
};

export default Servicos;
