import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1.5rem 1rem;
  background-image: linear-gradient(90deg, #3b305c 10%, #121212);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  p {
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  a {
    color: rgb(207, 100, 193);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

  a {
    color: #ffffff;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

function Footer({
  name = "Ezio-Projects",
  profileLink = "https://www.linkedin.com/in/alexandre-lopes-97352b287/",
}) {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} Todos os direitos reservados. Desenvolvido por{" "}
        <a href={profileLink} target="_blank" rel="noopener noreferrer">
          {name}
        </a>.
      </p>
      <SocialLinks>
        <a href={profileLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ezio-projects" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:ezio-projects@email.com">
          <FaEnvelope />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
