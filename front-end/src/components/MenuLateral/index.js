import React from "react";
import { Link } from "react-router-dom";

import { 
  FiBarChart, FiAlignLeft, 
  FiFlag, FiUser, FiTrendingUp,
  FiGift
} from "react-icons/fi";

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
            Desafios
          </Link>
          <Link to="/ranking">
            <FiTrendingUp size={20} />
            Ranking
          </Link>
          <Link to="/ranking-school">
            <FiBarChart size={20} />
            Ranking Escola
          </Link>
          <Link to="/rewards">
            <FiGift size={20} />
            Resgatar prêmios
          </Link>
          <button onClick={event => window.location.href='/profile'}>
            <img 
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
            />
            <span> <h4> 300xp </h4> </span>
            <h5> Erick Lascalla </h5>
          </button>
        </nav>
      </Content>
    </Container>
  );
}
