import styled from "styled-components";
import ThemeToggle from "../ThemeToggle";
import { memo } from "react";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;
  position: fixed;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 100%;
  height: 110px;
  z-index: 1;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Title>Welcome to COVID-19 Dashboard</Title>
      <ThemeToggle />
    </Nav>
  );
};
export default memo(Navbar);
