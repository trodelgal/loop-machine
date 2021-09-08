import styled from "styled-components";

export const Wrapper = styled.div`
  margin: ${(props) =>
    props.margin ? props.margin : "5% auto"};
  width: 80%;
  padding: ${(props) =>
    props.padding ? props.padding : "40px"};
  border-radius: 7px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  min-width: 300px;
  max-width: ${(props) =>
    props.width ? props.width : "700px"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; /* horizontal */
  align-items: center; /* vertical */
`;

export const GridDiv = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: ${(props) =>
    props.repeatFormula ? props.repeatFormula : "1fr 1fr 1fr"};
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
  props.repeatFormula ? props.repeatFormula : "1fr 2.5fr 2fr 2.5fr 2fr"};
  align-items: center;
  background-color:${(props) =>
    props.bgColor ? props.bgColor : "#b4b4b4"};
  opacity: 0.8;
  border-color: #000000;
  border-style: solid;
  border-width: 1px;
  transition: 150ms;
  border-radius: 2px;
  width: 100%;
  height: 100px;
  &:hover {
    background-color: rgba(201, 201, 201, 0.38);
  }
`;
