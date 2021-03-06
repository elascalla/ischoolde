import React from "react";

import { FaStar, FaFlagCheckered } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { GiStarGate } from "react-icons/gi";

import Container from "../../components/Container";
import { StudentWrapper, ViewStudentButton, Title } from "./styles";

export default function Ranking() {
  const data = [
    {
      name: "João",
      email: "joao@gmail.com",
      exp: 40
    },
    {
      name: "Estanis",
      email: "estanis@gmail.com",
      exp: 12
    },
    {
      name: "Fernando",
      email: "fernando@gmail.com",
      exp: 12
    },
    {
      name: "Daniel",
      email: "daniel@gmail.com",
      exp: 12
    },
    {
      name: "Jonas",
      email: "jonas@gmail.com",
      exp: 12
    },
    {
      name: "Daniela",
      email: "daniela@gmail.com",
      exp: 12
    },
    {
      name: "Maria",
      email: "Maria@gmail.com",
      exp: 12
    },
    {
      name: "Estanis Barão",
      email: "estanis@gmail.com",
      exp: 12
    },
    {
      name: "Estanis Barão",
      email: "estanis@gmail.com",
      exp: 12
    },
    {
      name: "Estanis Barão",
      email: "estanis@gmail.com",
      exp: 12
    }
  ];

  return (
    <Container>
      <Title>
        <h5> Ranking<strong> Geral </strong> </h5> 
        <div> 
          <FaStar size={25} />
          <FiAward size={40} />
          <FaStar size={25} />
        </div>
      </Title>
      <ul>
        {data.map(student => (
          <StudentWrapper>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Foto perfil"
            />

            <div>
              <p>{student.name}</p>
              <p>{student.email}</p>
            </div>
            <div>
              <p>Nível: {student.exp}</p>
            </div>
            <button type="button">VER PERFIL</button>
            <ViewStudentButton />
          </StudentWrapper>
        ))}
      </ul>
    </Container>
  );
}
