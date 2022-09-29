import React, { Suspense } from "react";
import logo from "./logo.svg";
import AppBody from "./AppBody";
import Pool from "./Pool";
import Send from "./Send";
import Swap from "./Swap";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { RedirectPathToSwapOnly, RedirectToSwap } from "./Swap/redirects";

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 160px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding: 16px;
  `};

  z-index: 1;
`;

const Marginer = styled.div`
  margin-top: 5rem;
`;

let Router: React.ComponentType;
if (process.env.PUBLIC_URL === ".") {
  Router = HashRouter;
} else {
  Router = BrowserRouter;
}

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route exact strict path="/swap" component={Swap} />
          <Route exact strict path="/send" component={Send} />
          <Route exact strict path="/pool" component={Pool} />
          <Route component={RedirectPathToSwapOnly} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
