import React from "react";

import Container from "../../components/Container";

import { Wrapper, Represents } from "./styles";

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
      percent: 62
    },
    {
      name: "Escola Técnica Rodrigues",
      points: 720,
      students: 52,
      percent: 58
    },
    {
      name: "E.E. Lourenço Perrine",
      points: 450,
      students: 29,
      percent: 32
    },
    {
      name: "E.M. Tabata Magalhães",
      points: 320,
      students: 28,
      percent: 25
    },
    {
      name: "E.E. Emiliana Moreira",
      points: 120,
      students: 40,
      percent: 10
    },
    {
      name: "E.M. Fabricio Fernandes",
      points: 20,
      students: 28,
      percent: 5
    }
  ];

  return (
    <Container>
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
                <div> {school.percent}xp </div>
              </span>
            </Represents>
          </Wrapper>
        ))}
      </ul>
    </Container>
  );
}
