import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IpContextProvider } from '../context/IpContext';

import Layout from '../components/Layout';
import Home from '../pages/Home';

const App = () => {
  return (
    <IpContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </IpContextProvider>
  );
};

export default App;
