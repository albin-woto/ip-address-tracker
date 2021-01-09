import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IpContextProvider } from '../context/IpContext';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));

const App = () => {
  return (
    <IpContextProvider>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </IpContextProvider>
  );
};

export default App;
