import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background: linear-gradient(-120deg, #0f0f17, #1f1f2b);
  padding: 30px 5px;
  height: 100%;
  width: max-content;
  align-self: center;
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  box-shadow: 2px 2px 2px #c6c6c6;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 170px;

  button {
    text-align: center;
    justify-content: center;
    color: #fff;
    background: transparent;
    width: 100%;
    border: 0px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 10px;
  }

  span {
    display: flex;
    margin-top: -10px;
    width: 100%;
    color: #fff;
    font-size: 20px;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 15px;
    margin-bottom: 10px;
    svg {
      margin-right: 10px;
    }
  }

  nav {
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    a {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 13px;
      color: #fff;
      transition: 0.4s;
      margin: 10px;
      text-transform: uppercase;
      padding-bottom: 10px;
      border-bottom: 2px solid transparent;
      min-width: 170px;

      svg {
        margin-right: 7px;
      }

      &:hover {
        color: ${darken(0.3, "#fff")};
        border-bottom: 2px solid #fff;
        transition: 0.4s;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;
  flex-direction: row;

  div {
    text-align: right;
    margin-right: -40px;

    a {
      margin-top: 2px;
      margin-right: 40px;
      font-size: 12px;
      color: #999;
      font-size: 14px;
      font-weight: bold;
      transition: 0.4s;

      &:hover {
        color: ${darken(0.3, "#999")};
        transition: 0.4s;
      }
    }
  }
`;
