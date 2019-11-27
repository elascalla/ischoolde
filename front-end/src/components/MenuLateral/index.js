import React from "react";
import { Link } from "react-router-dom";
import {
  MdDonutLarge,
  MdFormatTextdirectionLToR,
  MdList,
  MdPerson
} from "react-icons/md";

import { FiBarChart } from "react-icons/fi";

import { IoIosSchool } from "react-icons/io/";

import { Container, Content } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <span>
            <IoIosSchool size={25} /> iSchoolde
          </span>
          <Link to="/profile">
            <MdPerson size={30} />
            Perfil do Jovem
          </Link>
          <Link to="/dashboard">
            <MdDonutLarge size={30} />
            DASHBOARD
          </Link>
          <Link to="/register-challenge">
            <MdFormatTextdirectionLToR size={30} />
            Cadastrar desafio
          </Link>
          <Link to="/ranking">
            <FiBarChart size={30} />
            Ranking
          </Link>
          <Link to="/ranking-school">
            <FiBarChart size={30} />
            Ranking Escola
          </Link>
        </nav>
      </Content>
    </Container>
  );
}
