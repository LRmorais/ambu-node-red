import React from 'react';
import './App.css';

import Config from './components/medidor';
import Send from './components/send';
import Pressure from './components/pressure';
import uibuilder from './libs/uibuilderfe';

import Dashboard from './pages/home';

function App() {
  uibuilder.start();
  return (
    <div className="App">
        <Dashboard />
        {/* <Send />
        <Config />
        <Pressure /> */}
    </div>
  );
}

export default App;