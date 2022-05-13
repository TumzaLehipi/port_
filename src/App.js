import React, { Component } from 'react';

import {
    BrowserRouter as Router, 
  } from 'react-router-dom'

import Routes from "./routes";

import { 
  GlobalStyle, 
  Page, 
  Container,
  MainContentStyled
  } from "./styles/global";

import Navigation from './components/Navigation';

class App extends Component {

    render() {
        return (
          <Router>
            <GlobalStyle />
             <Navigation/>
                  <Page>
                    <MainContentStyled>
                    <Container>
                      <Routes />
                  </Container>
                  </MainContentStyled>
                </Page>
            </Router>
        );
    }
}

export default App
