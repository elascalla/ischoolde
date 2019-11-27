import React from "react";

import Container from "../../components/Container";

import { Wrapper, Represents } from "./styles";

export default function RankingSchool() {
  const data = [
    {
      name: "E.E. Mariano Lago Pereira",
      points: 450,
      students: 40,
      percent: 80
    },
    {
      name: "E.M. Zeferino Rodrigues",
      points: 320,
      students: 28,
      percent: 25
    }
  ];

  return (
    <Container>
      <ul>
        {data.map(school => (
          <Wrapper>
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
            <div>
              <Represents percent={school.percent} />
            </div>
            {/* <button type="button">VER PERFIL</button>
            <ViewButton /> */}
          </Wrapper>
        ))}
      </ul>
    </Container>
  );
}
