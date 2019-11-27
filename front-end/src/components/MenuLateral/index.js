import React from "react";
import { Link } from "react-router-dom";

import { FiBarChart, FiAlignLeft, FiFlag, FiUser, FiTrendingUp} from "react-icons/fi";

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
          <Link to="/dashboard">
            <FiAlignLeft size={20} />
            Dashboard
          </Link>
          <Link to="/register-challenge">
            <FiFlag size={20} />
            Cadastrar desafio
          </Link>
          <Link to="/ranking">
            <FiTrendingUp size={20} />
            Ranking
          </Link>
          <Link to="/ranking-school">
            <FiBarChart size={20} />
            Ranking Escola
          </Link>
          <Link to="/profile">
            <FiUser size={20} />
            Perfil
          </Link>
          <span>Lucas Massi</span>
        </nav>
      </Content>
    </Container>
  );
}
