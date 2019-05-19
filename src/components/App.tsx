import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Box } from 'rebass';

import Page404 from './Page404';
import Header from './Header';
import Shipments from './Shipments';
import ShipmentDetails from './ShipmentDetails';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans";
  }
`;

const Inner = styled(Box)`
  margin: 0 auto;
  max-width: 1000px;
  padding: 2rem;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Box className="App">
        <Header />
        <Inner>
          <Switch>
            <Route path="/" exact component={Shipments} />
            <Route path="/shipment/:id" component={ShipmentDetails} />
            <Route component={Page404} />
          </Switch>
        </Inner>
      </Box>
    </BrowserRouter>
  );
};

export default App;
