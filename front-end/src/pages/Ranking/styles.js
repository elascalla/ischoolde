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

export const StudentWrapper = styled.li`
  background: linear-gradient(-120deg, #0f0f17, #1f1f2b);
  color: #fff;
  margin: 0 0 8px 0;
  width: 600px;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 100px;

  div {
    display: flex;
    padding: 5px;

    p:first-child {
      font-size: 17px;
      font-weight: bold;
    }

    flex-direction: column;
    justify-content: center;
  }

  button {
    background-color: #fff;
    color: #0f0f17;
    border-radius: 4px;
    border: 0;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    width: 140px;
    text-justify: auto;
    font-weight: bold;
  }
`;

export const ViewStudentButton = styled.p``;
