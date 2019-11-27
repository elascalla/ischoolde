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
      <h2>Desafio</h2>
      <h2>Minha conta no GitHub</h2>

      <strong>Descrição</strong>
      <span>
        Imagine você ficar o dia inteiro codando e seu computador der tela azul?
        <br/>Acredite, não há nada pior!
      </span>
      <span>
        <br/>Por isso, nesse desafio você irá criar sua primeira conta GitHub, uma plataforma
        online para armazenar e revisar todos os seus códigos em qualquer lugar do mundo.
      </span>
      <span><br/>Siga os passos abaixo:</span>
      <span>
        <br/>Se você já tem uma conta pule os passos e clique em ENVIAR.
      </span>
      <span>
        1. Acesse o{" "}
        <a
          href="https://github.com"
          style={{ marginLeft: 5 + "px" }}
          target="_blank"
        >
          GitHub
        </a>
      </span>
      <span>2. Preencha "Username" com um nome de usuário de sua escolha</span>
      <span>
        3. No campo "Email" utilize o mesmo email que está usando aqui
      </span>
      <span>4. Escolha uma senha</span>
      <span>5. Clique em Sign up for GitHub</span>
      <span>6. Volte aqui e clique em ENVIAR</span>

      <strong>Stack</strong>
      <span>VCS - Versionamento</span>

      <Form onSubmit={handleSubmit}>
        <hr />
        <strong>Entregue através do link no GitHub:</strong>

        <Input name="link" placeholder="Link do repositório" />

        <strong>Ou cole o código abaixo</strong>
        <textarea placeholder={placeholder} rows={27}></textarea>

        <button type="submit" onClick={() => console.log(typeSend)}>
          ENVIAR
        </button>
      </Form>
    </Container>
  );
}
