import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Maincontent from './Components/maincontent/maincontent';
import Headingcontent from './Components/headingcontent/headingcontent';

function App() {
  return (
    <div className="App py-4">
      <div className="container-sm">
        <Headingcontent />
        <Maincontent />
      </div>
    </div>
  );
}

export default App;
