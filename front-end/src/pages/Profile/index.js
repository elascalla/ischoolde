import React from "react";

import { useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { signOut } from "../../store/modules/auth/actions";
import { updateProfileRequest } from "../../store/modules/user/actions";

import Container from "../../components/Container";
import { SubmitButton, Wrapper, Text, RankingList } from "./styles";

import { FiBarChart } from "react-icons/fi";

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Text>
        Olá <strong>Lucas</strong>,
        <br />
        Veja as informações do seu perfil!
        <hr />
        <span>
          Ranking Escolar: <strong>30</strong> de <strong>1650</strong>
        </span>
        <RankingList>
          <li key="1">
            <h4>NodeJS</h4>
            <h2>
              Ranking:
              <strong>12 de 1895</strong>
            </h2>
            {/* <span><h3>300xp</h3></span> */}

            <button type="button" onClick={event => window.location.href='/ranking'}>
              <FiBarChart size={20} />
              Ranking geral
            </button>
          </li>
          <li key="1">
            <h4>React-Native</h4>
            <h2>
              Ranking:
              <strong>30 de 1500</strong>
            </h2>

            <button type="button" onClick={event => window.location.href='/ranking'}>
              <FiBarChart size={20} />
              Ranking geral
            </button>
          </li>
          <li key="3">
            <h4>CSS</h4>
            <h2>
              Ranking:
              <strong>899 de 3600</strong>
              <br />

            </h2>

            <button type="button" onClick={event => window.location.href='/ranking'}>
              <FiBarChart size={20} />
              Ranking geral
            </button>
          </li>
        </RankingList>
      </Text>

      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Nome completo"
            value="Erick Lascalla"
          />
          <Input
            name="email"
            placeholder="Seu e-mail"
            value="erick.lascalla@gmail.com"
          />

          <hr />

          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha atual"
          />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmação de senha"
          />

          <SubmitButton type="submit">Atualizar</SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
}
