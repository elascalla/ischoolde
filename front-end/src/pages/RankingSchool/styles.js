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
  background: linear-gradient(-120deg, #0f0f17, #1f1f2b);
  color: #fff;
  margin: 0 0 8px 0;
  width: 600px;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div {
    display: flex;
    padding: 5px;

    p:first-child {
      font-size: 17px;
      font-weight: bold;
    }

    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const Represents = styled.div.attrs(props => ({
  width: props.width
}))`
  width: ${props => props.percent}px;
  height: 20px;
  margin: 15px auto;
  background: #7159c1;
  border-radius: 5px;
  box-shadow: inset 0 0 5px #000;
`;

export const ViewButton = styled.p``;