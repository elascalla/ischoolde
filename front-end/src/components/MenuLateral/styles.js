import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background: #fff;
  padding: 30px 5px;
  height: 90%;
  width: max-content;
  align-self: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      color: #6756b8;
      transition: 0.4s;
      margin: 10px;
      text-transform: uppercase;

      svg {
        margin-right: 7px;
      }

      &:hover {
        color: ${darken(0.3, "#6756b8")};
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
