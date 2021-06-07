import React, { useState } from "react";
import styled from "styled-components";
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header>
        <Title>Mary's Homepage</Title>
        <nav>
          <NavList>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/">Blog</NavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>
        <ContactFormButton onClick={() => setShowModal(true)}>
          Open Contact Form
        </ContactFormButton>

        <Modal 
          title="Contact us"
          isOpen={showModal}
          handleDismiss={() => setShowModal(false)}
        >
          <ContactForm />  
        </Modal>

      </Main>

    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const NavList = styled.ul`
  display: flex;
  gap: 8px;
  list-style-type: none;
`;

const NavLink = styled.a`
  color: hsl(265deg 90% 40%);
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0px 16px;
  outline-offset: 4px;
`;

const Main = styled.main`
  min-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactFormButton = styled.button`
  border: 1px solid;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: hsl(300deg 10% 95%);
  cursor: pointer;
`


export default App;
