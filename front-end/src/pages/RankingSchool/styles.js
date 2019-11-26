import styled from "styled-components";

export const Container = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Wrapper = styled.li`
  background-color: #ccc;

  margin: 0 0 8px 0;
  width: 900px;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ViewStudentButton = styled.p``;
