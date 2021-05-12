import React from 'react';
import logo from './logo.svg'
import './App.css';

import Dashboard from './Dashboard';
import Store from './Store'

export default function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}
