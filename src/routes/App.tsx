import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IpContextProvider } from '../context/IpContext';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';

const App = () => {
  return (
    <IpContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </IpContextProvider>
  );
};

export default App;
