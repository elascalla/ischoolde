import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Text = styled.text`
  color: #6a6a80;
  font-size: 16px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading ? true : false,
}))`
  background: #6756b8;
  margin-top: 20px;
  color: rgb(25, 24, 31);
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
    border-color: #21212b;
    background: ${darken(0.03, '#6756b8')};
    transition: 0.5s;
  }

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const RegisterButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  background: #6a6a80;
  margin-top: 20px;
  color: #fff;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NewRegister = styled.div`
  color: #6a6a80;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  display: flex;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    margin-left: 10px;
    transition: 0.5s;
  }

  a:hover {
    color: #6756b8;
    transition: 0.5s;
  }
`;
