import React from 'react';
import { Header } from './modules/header/Header';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

export const App = ({children}) => {
  return (
    <div className="App">
    <Header />
    {children}
    </div>
  );
};