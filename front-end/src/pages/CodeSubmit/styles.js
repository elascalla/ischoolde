import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 50px auto;
  padding: 15px;
  height: max-content;

  color: #403f3d;
  line-height: 1.8;
  font-size: 15px;

  strong {
    font-size: 20px;
  }

  h2 {
    text-align: center;
  }

  background: linear-gradient(-120deg, #fff, #fff);
  border: 1px solid rgba(173, 173, 173, 0.5);
  box-shadow: 4px 4px 4px rgba(173, 173, 173, 0.5);
  border-radius: 4px;

  h1 {
    color: #0f0f17;
  }

  strong {
    font-size: 20px;
  }

  span {
    font-size: 20px;
    margin: 6px;
    display: flex;

    strong {
      padding: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    input {
      background: #0f0f1716;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #0f0f17;

      &::placeholder {
        color: #0f0f1799;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: #0f0f1740;
      margin: 10px 0;
    }

    textarea {
      height: 200px;
      background: #0f0f1716;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #0f0f17;
    }

    button {
      align-self: flex-end;
      justify-self: flex-end;
      margin: 10px 0 0;
      padding: 0 10px;
      height: 44px;
      background: linear-gradient(-120deg, #0f0f17, #1f1f2b);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      transition: background 0.35s;
    }
  }
`;
