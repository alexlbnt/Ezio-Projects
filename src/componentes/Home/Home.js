import React from 'react'; 
import styled from 'styled-components';
import PaginaSobre from '../../imagens/Pagina-Sobre2.png';


const HomeContainer = styled.div`
    color: white;
    text-align: center;
    width: 100vw;
    background-image: url(${PaginaSobre});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;


`;

const Presentation = styled.div`
    max-width: 400px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    margin-left: 20px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }
`;

const ContentSection = styled.div`
    width: 100%;
    padding: 50px 20px;
    background-color:hsl(0, 0.00%, 7.10%);
    color: white;
    text-align: center;
    height: 1000px;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const Home = () => {
    return (
        <>
            <HomeContainer>
                <Presentation>
                    <h1>.</h1>
                    <p>
                    .
                    </p>
                </Presentation>
            </HomeContainer>
            <ContentSection>
                <h2>Ezio Projects</h2>
                <p>
                    DESCRIÇÕES...
                </p>

            </ContentSection>
        </>
    );
};


export default Home;

