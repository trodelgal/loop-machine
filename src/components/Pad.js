import React, { useEffect, useState, useCallback } from "react";
import {StyledDiv} from "../styles/styledComponents"

export default function Pad({loop, padClick}) {  
    return (
     <StyledDiv bgColor={loop.color?loop.color:"#b4b4b4"} onClick ={()=>padClick(loop)}>
         {loop.name}
     </StyledDiv>
    );
  }