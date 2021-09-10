import React from "react";
import {StyledDiv} from "../styles/styledComponents"

export default function Pad({loop, padClick, index}) {  
    return (
     <StyledDiv bgColor={loop.color?loop.color:"#b4b4b4"} onClick ={()=>padClick(loop,index)} opacity={loop.state?1:0.5}>
         {loop.name}
     </StyledDiv>
    );
  }