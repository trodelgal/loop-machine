import styled from "styled-components";

export const Wrapper = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "5% auto")};
  width: 80%;
  height: 80%;
  padding: ${(props) => (props.padding ? props.padding : "40px")};
  border-radius: 7px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  min-width: 200px;
  color: ${(props) => (props.color ? props.color : "black")};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 100;
  top: 0px;
  height: 90px;
  width: 100%;
  background-color: rgb(23, 3, 1);
`;
export const Title = styled.div`
  width: 25%;
  height: 90px;
  position: relative;
  margin-top: 0px;
  padding-right: 10px;
  background-color: rgb(91, 56, 112);
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 90px 90px;
    border-color: transparent transparent rgb(23, 3, 1) transparent;
  }
  @media (max-width: 600px) {
    display: none; 
  } 
`;
export const MainTitle = styled.h3`
  font-size: 25px;
  margin-top: 3%;
  margin-left: 0px;
  padding: 0px;
  color: rgb(6, 26, 65);
  @media (max-width: 900px) {
    font-size: 20px;
    content: '';
  } 
`;

export const GridDiv = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: ${(props) =>
    props.repeatFormula ? props.repeatFormula : "1fr 1fr 1fr"};
`;

export const ListDiv = styled.div`
  display: grid;
  width: 95%;
  background-color: "red";
  grid-template-columns: ${(props) =>
    props.repeatFormula ? props.repeatFormula : "1fr 1fr 1fr"};
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* horizontal */
  align-items: center; /* vertical */
  align-items: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#b4b4b4")};
  border-color: #000000;
  border-style: solid;
  border-width: 1.2px;
  transition: 150ms;
  border-radius: 2px;
  width: 100%;
  height: 100px;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 500px) {
    font-size: x-small;
  }
`;
