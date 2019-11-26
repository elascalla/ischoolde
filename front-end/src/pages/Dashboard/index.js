import React, { Component } from 'react';
import { FiStar } from 'react-icons/fi';
import { FaStar, FaFlagCheckered } from 'react-icons/fa';

import { ProductList } from "./styles";

export default function Dashboard() {
  return (
    <ProductList>
      <li key="1">
        <img
          src="https://i0.wp.com/blog.grandchef.com.br/wp-content/uploads/2018/09/Logo-iFood.jpg?ssl=1"
          alt="Desafio iFood"
        />
        <strong>Desafio iFood</strong>
        <span>NIVEL 2</span>

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
          <img src="https://logodownload.org/wp-content/uploads/2018/01/steam-logo-1.png" alt="Desafio iFood" />
          <h4> Nível 15 </h4>
          <strong>Desafio Steam
            <h2>+20 pontos</h2>
          </strong>

          <button
            type="button"
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              2
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li key="1">
          <img src="https://i0.wp.com/blog.grandchef.com.br/wp-content/uploads/2018/09/Logo-iFood.jpg?ssl=1" alt="Desafio iFood" />
          <strong>Desafio iFood</strong>
          <span>NIVEL 2</span>

          <button
            type="button"
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              2
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList>
    );
}
