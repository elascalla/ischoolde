import React from "react";

import { StudentWrapper, ViewStudentButton, Container } from "./styles";

export default function Ranking() {
  const data = [
    {
      name: "João das Neves",
      email: "joao@gmail.com",
      exp: 40,
      challengesCompleted: 121
    },
    {
      name: "João das Neves",
      email: "joao@gmail.com",
      exp: 40,
      challengesCompleted: 121
    }
  ];

  return (
    <Container>
      <ul>
        {data.map(student => (
          <StudentWrapper>
            <div>
              <p>{student.name}</p>
              <p>{student.email}</p>
            </div>
            <div>
              <p>{student.exp}</p>
              <p>{student.challengesCompleted}</p>
            </div>
            <ViewStudentButton />
          </StudentWrapper>
        ))}
      </ul>
    </Container>
  );
}
