import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import styled from '@emotion/styled';

const StyledApp = styled('div')`
  background-image: linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
