import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";
import { FaStar, FaFlagCheckered } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io/";

import Container from "../../components/Container";
import { ProductList, ImageSchool } from "./styles";

export default function Rewards() {
  return (
    <Container>
      <ProductList>
        <li key="4">
          <img
            src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
            alt="Foto Github"
          />
          <h4> Nível 1 </h4>
          <strong>
            Minha conta no GitHub
            <h2>+30 pontos</h2>
          </strong>

          <p>
            Já pensou ficar codando o dia inteiro e seu computador der tela azul
            ? Acredita, não tem coisa pior! Por isso, nesse desafio você irá
            criar sua conta no GitHub !
          </p>

          <button type="button">
            <Link to="/code-submit">
              <FaFlagCheckered size={16} />
              Aceitar Desafio
            </Link>
          </button>
        </li>

        <li key="1">
          <img
            src="https://logodownload.org/wp-content/uploads/2018/01/steam-logo-1.png"
            alt="Desafio iFood"
          />
          <h4> Nível 30 </h4>
          <strong>
            Desafio iFood
            <span>R$ 100,00</span>
            <h2>+5 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="1">
          <img
            src="https://logodownload.org/wp-content/uploads/2019/08/github-logo.png"
            alt="Desafio iFood"
          />
          <h4> Nível 30 </h4>
          <strong>
            Desafio iFood
            <span>R$ 100,00</span>
            <h2>+5 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="1">
          <img
            src="https://img.ibxk.com.br/2018/08/23/23122750018066.jpg?w=1120&h=420&mode=crop&scale=both"
            alt="Desafio iFood"
          />
          <h4> Nível 30 </h4>
          <strong>
            Desafio iFood
            <span>R$ 100,00</span>
            <h2>+5 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="1">
          <img
            src="data:image/png;base64,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"
            alt="Desafio iFood"
          />
          <h4> Nível 30 </h4>
          <strong>
            Desafio iFood
            <span>R$ 100,00</span>
            <h2>+5 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="1">
          <img
            src="http://hackathontotalvoice.shawee.io/assets/img/logo-shawee.png"
            alt="Desafio iFood"
          />
          <h4> Nível 30 </h4>
          <strong>
            Desafio iFood
            <span>R$ 100,00</span>
            <h2>+5 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="1">
          <img
            src="http://mspsummit.com.br/wp-content/uploads/2019/10/sympla.png"
            alt="Desafio iFood"
          />
          <h4> Nível 30 </h4>
          <strong>
            Desafio iFood
            <span>R$ 100,00</span>
            <h2>+5 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="3">
          <img
            src="https://comunidade.rockcontent.com/wp-content/uploads/2019/01/hotmart-1280x720.png"
            alt="Desafio iFood"
          />
          <h4> Nível 20 </h4>
          <strong>
            Desafio Uber
            <span>R$ 30,00</span>
            <h2>+20 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="4">
          <img
            src="https://inforex.com.br/wp-content/uploads/2018/12/impulso-network.jpg"
            alt="Foto Github"
          />
          <h4> Nível 5 </h4>
          <strong>
            Minha Conta GitHub
            <h2>+30 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="4">
          <img
            src="https://seucreditodigital.com.br/wp-content/uploads/2018/04/banco-neon.jpg"
            alt="Foto Github"
          />
          <h4> Nível 5 </h4>
          <strong>
            Minha Conta GitHub
            <h2>+30 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="4">
          <img
            src="http://bossabox.com/img/artboard-2.png"
            alt="Foto Github"
          />
          <h4> Nível 5 </h4>
          <strong>
            Minha Conta GitHub
            <h2>+30 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="4">
          <img
            src="http://gestaoporideias.com.br/wp-content/uploads/2019/03/vulpi.png"
            alt="Foto Github"
          />
          <h4> Nível 5 </h4>
          <strong>
            Minha Conta GitHub
            <h2>+30 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="4">
          <img
            src="https://rocketseat.com.br/static/images/og/rocketseat.png"
            alt="Foto Github"
          />
          <h4> Nível 5 </h4>
          <strong>
            Minha Conta GitHub
            <h2>+30 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        <li key="4">
          <img
            src="https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/zup-innovation-azure-directory-vm-keyvault-monitor-pt-brazil/resources/9bcd6ae0-653e-45aa-a1f3-6d9bd100cb06/1105353789691101035"
            alt="Foto Github"
          />
          <h4> Nível 5 </h4>
          <strong>
            Minha Conta GitHub
            <h2>+30 pontos</h2>
          </strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <button type="button">
            <FaFlagCheckered size={16} />
            Aceitar Desafio
          </button>
        </li>
        
      </ProductList>
    </Container>
  );
}
