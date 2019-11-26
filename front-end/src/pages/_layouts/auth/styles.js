import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #0f0f17, #0f0f17);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      flex: 1;
      border: 3px solid rgb(25, 24, 31);
      padding: 15px 15px;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 10px;
      width: 100%;
      justify-content: center;
      background: rgb(25, 24, 31);
      color: #fff;
      margin-bottom: 10px;

      &:focus {
        border-color: #6756b8;
        transition: 0.4s;
      }

      &::placeholder {
        color: #575561;
      }
    }

    span {
      color: #ed311c;
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;
