import styled from 'styled-components';
import { darken } from 'polished';

export const ImageSchool = styled.h2`
  align-self: center;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0f0f17;
  color: #fff;

  border-radius: 4px 4px 0px 0px;
  svg {
    margin-right: 10px;
  }
`;

export const ProductList = styled.ul`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  li {
    display: flex;
    flex-direction: column;
    background:  linear-gradient(-120deg, #fff, #fff);
    height: 300px;
    border: 1px solid rgba(173,173,173,.5);
    box-shadow: 4px 4px 4px rgba(173,173,173,.5);
    border-radius: 4px;

    h4 {
      background: #fff;
      color: #403f3d;
      margin-top: -10px;
      height: 25px;
      padding-top: 4px;
      font-size: 15px;
      width: 100px;
      box-shadow: 2px 2px 2px #ccc;
      margin: 0 auto;
      margin-top: -15px;
      border-radius: 5px;
      justify-content: center;
      text-align: center;
    }

    img {
      align-self: center;
      width: 100%;
      height: 100px;
      border-radius: 4px 4px 0px 0px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #403f3d;
      margin-top: 15px;
      margin-left: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin-left: 10px;
        border-radius: 3px;
        background: #403f3d;
        color: #fff;
        padding: 2px;
        font-size: 12px;
        margin-right: 15px;
      }

      span {
        margin-left: 10px;
        border-radius: 3px;
        background: #639c00;
        color: #fff;
        padding: 2px;
        font-size: 12px;
      }
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    p {
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 10px;
      color: #c6c6c6;
      text-align: justify;
    }
    button {
      background: transparent;
      color: #403f3d;
      border: 0;
      border-radius: 4px;
      margin-top: auto;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;
      &:hover {
        color: ${darken(0.06, '#403f3d')};
        transition: 1s;
        svg {
          color: ${darken(0.06, '#403f3d')};
        }
      }
      svg {
        color: #403f3d;
        margin-right: 7px;
      }
    }
  }
`;
