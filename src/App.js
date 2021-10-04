import React from 'react';
import { Header } from './modules/header/Header';
import './App.css';
import { Planets } from './modules/planets/Planets';
import { Creatures } from './modules/creatures/Creatures';

export const App = ({children}) => {
  return (
    <div className="App">
    <Header />
    {children}
    {/* <Planets/>
    <Creatures/> */}
    </div>
  );
};