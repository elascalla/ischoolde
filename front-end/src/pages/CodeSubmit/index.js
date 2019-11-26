import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { Form, Choice, Input, FileInput } from "@rocketseat/unform";

import placeholder from "./code_placeholder";

export default function CodeSubmit() {
  const { typeSend, setTypeSend } = useState("repo");

  function handleChoice(progress, event) {
    console.log(progress, event.target.name);
  }

  function handleSubmit(data) {
    console.log(data);
  }

  useEffect(() => {
    console.log(typeSend);
  }, [typeSend]);

  return (
    <Container>
      <h1>Code submit</h1>
      <hr></hr>
      <h2>Desafio Uber</h2>

      <strong>Descrição</strong>
      <span>Descrição aqui</span>

      <strong>Linguagem</strong>
      <span>Javascript</span>

      <Form onSubmit={handleSubmit}>
        <strong>Forma de envio:</strong>

        <Input name="link" placeholder="Link do repositório" />
        <hr />
        <textarea placeholder={placeholder} rows={27}></textarea>

        <button type="submit" onClick={() => console.log(typeSend)}>
          Enviar
        </button>
      </Form>
    </Container>
  );
}
