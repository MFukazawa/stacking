import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import styled from 'styled-components';
import '@reach/tooltip/styles.css';

import Header from './components/Header';
import GlobalStyles from './GlobalStyles';
import HelpButton from './components/HelpButton';
import Sidebar from './components/Sidebar';
import About from './pages/about';
import Flow from './pages/flow';
import Home from './pages/home';

export default function App() {
  return (
    <Router history={history}>
      <>
        <Wrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <Relative>
            <Contents>
              <Switch>
                <Route exact component={Flow} path='/flow' />
                <Route exact component={About} path='/about' />
                <Route exact component={Home} path='/' />
              </Switch>
            </Contents>
            <Sidebar />
          </Relative>
        </Wrapper>
        <HelpButton />

        <GlobalStyles />
      </>
    </Router>
  );
}

const Wrapper = styled.div`
  min-height: 150vh;
  isolation: isolate;
`;

const Relative = styled.div`
  position: relative;
`

const Contents = styled.div`
  padding: 0 240px 0 0;
`

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;
