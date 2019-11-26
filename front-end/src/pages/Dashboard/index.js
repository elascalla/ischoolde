import React, { Component } from 'react';
import { FiStar } from 'react-icons/fi';
import { FaStar, FaFlagCheckered } from 'react-icons/fa';

import { ProductList } from "./styles";

export default function Dashboard() {
    return (
      <ProductList>
        <li key="1">
          <img src="https://img.ibxk.com.br/2018/08/23/23122750018066.jpg?w=1120&h=420&mode=crop&scale=both" alt="Desafio iFood" />
          <h4> Nível 30 </h4>
          <strong>Desafio iFood
            <span>R$ 100,00</span>
            <h2>+5 pontos</h2>
          </strong>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation</p>

          <button type="button">
            <FaFlagCheckered size={16}/>Aceitar Desafio
          </button>
        </li>
        <li key="1">
          <img src="https://ogimg.infoglobo.com.br/economia/18595409-f8e-2d2/FT1086A/652/Uber_Logobit_Digital_black.jpg" alt="Desafio iFood" />
          <h4> Nível 20 </h4>
          <strong>Desafio Uber
            <span>R$ 30,00</span>
            <h2>+20 pontos</h2>
          </strong>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation</p>

          <button type="button">
            <FaFlagCheckered size={16}/>Aceitar Desafio
          </button>
        </li>
        <li key="1">
          <img src="https://ogimg.infoglobo.com.br/economia/18595409-f8e-2d2/FT1086A/652/Uber_Logobit_Digital_black.jpg" alt="Desafio iFood" />
          <h4> Nível 20 </h4>
          <strong>Desafio Uber
            <span>R$ 30,00</span>
            <h2>+20 pontos</h2>
          </strong>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation</p>

          <button type="button">
            <FaFlagCheckered size={16}/>Aceitar Desafio
          </button>
        </li>
      </ProductList>
    );
}
