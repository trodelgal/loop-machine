import React, { useState } from "react";
import {
  StyledLink,
  RouterDiv,
  Header,
  Title,
  MainTitle,
} from "../styles/styledComponents";
import QueueMachine from "./QueueMachine";
import LoopMachine from "./LoopMachine";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Router forceRefresh={true}>
        <Header>
          <Title>
            <MainTitle>LOOP MACHINE</MainTitle>
          </Title>
          <RouterDiv>
            <StyledLink to="/">Loop</StyledLink>
            <StyledLink to="/list">Playlist</StyledLink>
          </RouterDiv>
        </Header>
        <Route exact path="/">
          <LoopMachine />
        </Route>
        <Route exact path="/list">
          <QueueMachine />
        </Route>
      </Router>
    </>
  );
}
