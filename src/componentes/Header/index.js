import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-image: linear-gradient(90deg, rgb(0, 0, 0) 5%, #3B305C);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    font-size: 0.75rem;

    &:hover {
        transform: scale(1.1);
    }

    & > * {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

const OpcoesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > * {
        color: #ffffff;
        font-size: 0.8rem;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #ff00ff;
        }
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <OpcoesContainer>
                <OpcoesHeader />
            </OpcoesContainer>
        </HeaderContainer>
    );
}

export default Header;
