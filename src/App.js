import React from 'react';
import './App.css';

import Config from './components/medidor';
import Send from './components/send';
import Pressure from './components/pressure';
import uibuilder from './libs/uibuilderfe';

import Dashboard from './pages/home';

uibuilder.start();
function App() {


  const [msgRecvd, setMsgRecvd] = React.useState({});

    uibuilder.onChange('msg', (newVal) => {
      setMsgRecvd(newVal.payload)
      console.log(msgRecvd)
    })
  
  
  return (
    <div className="App">
        {/* <Dashboard /> */}
        {/* <Send />
        <Config />
        <Pressure /> */}
    </div>
  );
}

export default App;