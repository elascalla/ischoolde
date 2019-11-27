import styled, { keyframes } from "styled-components";
import { darken } from "polished";

export const Text = styled.div`
  color: #403f3d;
  line-height: 1.8;
  font-size: 20px;

  strong {
    font-size: 20px;
  }

  span {
    font-size: 20px;
    margin: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      padding: 10px;
    }
  }

  hr {
    margin-top: 30px;
  }
`;

export const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    h2 {
      font-size: 20px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 20px 0 10px;
    }

    span {
      color: #ed311c;
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LogoutButton = styled.button`
  background: #f52c36;
  margin-top: 20px;
  border: 0;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  transition: 0.5s;
  font-size: 16px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    border-color: #f52c36;
    background: ${darken(0.08, "#f52c36")};
    transition: 0.5s;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading ? true : false
}))`
  background: transparent;
  color: #403f3d;
  border: 1 solid #ccc;
  margin-top: 20px;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.5s;
  font-size: 16px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    /* color: ${darken(0.06, "#000")}; */
    background: ${darken(0.06, "#ccc")};
    color: #403f3d;
    transition: 1s;
    svg {
      color: ${darken(0.06, "#000")};
    }
  }

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;
