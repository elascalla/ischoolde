import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: linear-gradient(-90deg, #fff, #fff);
    color: #6a6a80;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
  }

  body, input, button {
  	color: #222;
    font-size: 14px;
    font-family: Roboto, Helvetica, sans-serif;
	}

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;

    &:focus {
      border-color: #403f3d;
      transition: 0.4s;
    }

    &::placeholder {
      color: #575561;
    }
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    input {
      flex: 1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 10px;

      &:focus {
        border-color: #403f3d;
        transition: 0.4s;
      }

      &::placeholder {
        color: #575561;
      }
    }
  }
`;
