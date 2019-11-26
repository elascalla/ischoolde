import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Dashboard(){

    return (
      <ProductList>
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
