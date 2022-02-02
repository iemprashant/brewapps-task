import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Maincontent from './Components/maincontent/maincontent';

function App() {
  return (
    <div className="App py-4">
      <div className="container-sm">
        <h2 className="fw-bolder p-1">Live Spaces</h2>
        <h6 className="fw-lighter p-1 text-secondary  ">
          <img
            className="me-2"
            src="https://img.icons8.com/fluency-systems-filled/32/000000/verified-badge.png"
          />
          All NFTs on Cyber either belong to or were minted by their space
          creator.
        </h6>
        <Maincontent />
      </div>
    </div>
  );
}

export default App;
