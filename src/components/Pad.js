import React, { useEffect, useState, useCallback } from "react";
import {StyledDiv} from "../styles/styledComponents"

export default function Pad({color}) {  
  
    return (
     <StyledDiv bgColor={color?color:"#b4b4b4"}>

     </StyledDiv>
    );
  }