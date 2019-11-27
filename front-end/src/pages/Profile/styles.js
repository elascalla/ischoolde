import styled, { keyframes } from "styled-components";
import { darken } from "polished";

export const Text = styled.div`
  margin-left: 100px;
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
    margin-left: 100px;
    margin-top: 30px;
    margin-bottom: 30px;

    h2 {
      font-size: 20px;
    }

<<<<<<< HEAD
=======
    input {
      flex: 1;
      border: 2px solid #ccc;
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

>>>>>>> 02aae01e386e00672c4b225eddc706f184530cc1
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
  background: #1f1f2b;
  color: #fff;
  border: 0;
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
    background: ${darken(0.06, "#1f1f2b")};
    transition: 1s;
  }

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const RankingList = styled.ul`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  list-style: none;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  li {
    display: flex;
    flex-direction: column;
    background: linear-gradient(-120deg, #fff, #fff);
    height: 200px;
    border: 1px solid rgba(173, 173, 173, 0.5);
    box-shadow: 4px 4px 4px rgba(173, 173, 173, 0.5);
    border-radius: 4px;
    min-width: 300px;

    h4 {
    background: #0f0f17;
    color: #fff;
    height: 30px;
    padding-top: 4px;
    font-size: 15px;
    width: 200px;
    box-shadow: 2px 2px 2px #ccc;
    margin: 0 auto;
    margin-top: -12px;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
  }

  strong {
    font-size: 20px;
  }

  h2 {
    font-size: 20px;
    margin: 20px;
    margin-top: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      padding: 10px;
    }
  }

  span {
    border-bottom: 0px;
    height: 2px;
    justify-content: left;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255,.2);
    h4 {
      background: #319902;
      width: 70%;
      height: 20px;
      border-radius: 5px 3px 3px 5px;
      margin-left: -1px;
      margin-top: -1px;
      font-weight: 200;
      padding-top: 3px;
      font-size: 12px;
    }
  }

  button {
      background: transparent;
      color: #403f3d;
      border-radius: 4px;
      margin: 15px;
      margin-top: 15px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;
      border: 0;

      &:hover {
        color: ${darken(0.06, "#403f3d")};
        transition: 1s;
        background: #f0f0f0;
        svg {
          color: ${darken(0.06, "#403f3d")};
        }
      }
      svg {
        color: #403f3d;
        margin-right: 7px;
      }
    }
  }
`;
