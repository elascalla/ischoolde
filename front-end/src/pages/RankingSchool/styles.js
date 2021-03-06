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

export const Title = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  justify-content: space-between;
  margin-bottom: 20px; 

  h5 {
    font-size: 30px;
    font-weight: 200;
  }

`

export const Wrapper = styled.li`
  background: linear-gradient(-120deg, #0f0f17, #1f1f2b);
  color: #fff;
  margin: 0 0 8px 0;
  max-width: 900px;
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
  span {
    border-bottom: 0px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 100px;
    background: #fff;
    height: 25px;
    div {
      display: flex;
      background: #319902;
      width: ${props => props.represent}%;
      height: 25px;
      justify-content: center;
      border-radius: 5px 3px 3px 5px;
      margin-left: -1px;
      margin-top: -1px;
      font-weight: 200;
      padding-top: 8px;
      font-size: 12px;
    }
  }
`;

export const ViewButton = styled.p``;
