import React from "react";

import Container from "../../components/Container";

import { FaStar, FaFlagCheckered } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { GiStarGate } from "react-icons/gi";

import { Wrapper, Represents, Title } from "./styles";

export default function RankingSchool() {
  const data = [
    {
      name: "E.E. Mariano Lago Pereira",
      points: 1350,
      students: 40,
      percent: 88
    },
    {
      name: "E.M. Zeferino Rodrigues",
      points: 1045,
      students: 38,
      percent: 74
    },
    {
      name: "E.E. Ramiro Raimundo",
      points: 850,
      students: 40,
      percent: 70
    },
    {
      name: "Escola Técnica Rodrigues",
      points: 720,
      students: 52,
      percent: 65
    },
    {
      name: "E.E. Lourenço Perrine",
      points: 450,
      students: 29,
      percent: 50
    },
    {
      name: "E.M. Tabata Magalhães",
      points: 320,
      students: 28,
      percent: 45
    },
    {
      name: "E.E. Emiliana Moreira",
      points: 120,
      students: 40,
      percent: 40
    },
    {
      name: "E.M. Fabricio Fernandes",
      points: 20,
      students: 28,
      percent: 35
    }
  ];

  return (
    <Container>
      <Title>
        <h5> Ranking por <strong>Escola</strong> </h5> 
        <div> 
          <FaStar size={25} />
          <FiBook size={40} />
          <FaStar size={25} />
        </div>
      </Title>
      <ul>
        {data.map(school => (
          <Wrapper key={school.name}>
            <div>
              <p>{school.name}</p>
            </div>
            <div>
              <p>Pontos</p>
              <p> {school.points}</p>
            </div>
            <div>
              <p>Alunos</p>
              <p> {school.students}</p>
            </div>
            <Represents represent={school.percent}>
              <span>
                <div> {school.percent}% </div>
              </span>
            </Represents>
          </Wrapper>
        ))}
      </ul>
    </Container>
  );
}
