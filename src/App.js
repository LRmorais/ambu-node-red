import React from 'react';
import './App.css';

import Config from './components/conf';
import Send from './components/send';
import Pressure from './components/pressure';
import uibuilder from './libs/uibuilderfe';

function App() {
  uibuilder.start();
  return (
    <div className="App">
        <Send />
        <Config />
        <Pressure />
    </div>
  );
}

export default App;