import React from "react";

import { useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { signOut } from "../../store/modules/auth/actions";
import { updateProfileRequest } from "../../store/modules/user/actions";

import Container from "../../components/Container";
import { SubmitButton, Wrapper, Text } from "./styles";

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
      </Text>

      <hr />

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
