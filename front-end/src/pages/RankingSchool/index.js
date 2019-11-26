import React from "react";

import { Wrapper, Container } from "./styles";

export default function RankingSchool() {
  const data = [
    {
      name: "E.E. Mariano Lago Pereira",
      points: 450,
      students: 40
    },
    {
      name: "E.M. Zeferino Rodrigues Machado",
      points: 320,
      students: 28
    }
  ];

  return (
    <Container>
      <ul>
        {data.map(school => (
          <Wrapper>
            <div>
              <p>{school.name}</p>
              <p>{school.points}</p>
              <p>{school.students}</p>
            </div>
          </Wrapper>
        ))}
      </ul>
    </Container>
  );
}
