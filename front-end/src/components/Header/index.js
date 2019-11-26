import React from "react";
import { Link } from "react-router-dom";
import { MdDonutLarge, MdFormatTextdirectionLToR } from "react-icons/md";

// import logo from '../../assets/images/orbita_logo.png';

import { Container, Content } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <MdDonutLarge size={30} />
            DASHBOARD
          </Link>
          <Link to="/register-challenge">
            <MdFormatTextdirectionLToR size={30} />
            Cadastrar desafio
          </Link>
          <Link to="/ranking">Ranking</Link>
        </nav>
      </Content>
    </Container>
  );
}
