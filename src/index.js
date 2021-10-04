import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { CreaturesPage } from './pages/creaturesPage/CreaturesPage';
import { PlanetsPage } from './pages/planetsPage/PlanetsPage';
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={CreaturesPage} />
          <Route path='/creatures' component={CreaturesPage} />
          <Route  path='/planets' component={PlanetsPage} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);