import styled from "styled-components";

export const Container = styled.div`
  background: #eef;
  max-width: 800px;
  width: 100%;
  margin: 50px auto;
  align-self: center;
  height: max-content;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #0f0f17;
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
      height: 100%;
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
      background: #0f0f17;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.35s;
    }
  }
`;
