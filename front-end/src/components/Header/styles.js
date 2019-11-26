import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      color: #6756b8;
      transition: 0.4s;

      svg {
        margin-right: 7px;
      }

      &:hover {
        color: ${darken(0.3, '#6756b8')};
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
        color: ${darken(0.3, '#999')};
        transition: 0.4s;
      }
    }
  }
`;
