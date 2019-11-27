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
  position: fixed;
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
    
    button {
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
        border: 2px solid #fff;
      }
      span {
        border-bottom: 0px;
        height: 20px;
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
    }

    h3 {
      justify-content: space-between;
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-left: 10px;
      }

      h5 {
        color: #fff;
        font-size: 15px;
        margin-left: 10px;
        font-weight: 200
      }
    }


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
      border-left: 2px solid transparent;
      min-width: 170px;
      text-align: center;
      padding-left: 10px;
      padding-top: 5px;

      svg {
        margin-right: 7px;
      }

      &:hover {
        color: ${darken(0.3, "#fff")};
        border-left: 2px solid #fff;
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
