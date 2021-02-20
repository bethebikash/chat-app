import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import styled from '@emotion/styled'

const StyledApp = styled('div')`
    background: gray;
    height: 100vh;
    width; 100vw;
`;

const App = () => (
  <StyledApp>
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </Router>
  </StyledApp>
);

export default App;
