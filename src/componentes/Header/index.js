import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const HeaderContainer = styled.header`
  background-image: linear-gradient(90deg, rgb(0, 0, 0) 5%, #3b305c);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  & > * {
    width: 3rem;
    height: 3rem;
  }
`;

const OpcoesContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    color: #ffffff;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #ff00ff;
    }
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuButton>

      <OpcoesContainer open={menuOpen}>
        <OpcoesHeader />
      </OpcoesContainer>
    </HeaderContainer>
  );
}

export default Header;
