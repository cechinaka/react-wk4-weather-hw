import React from 'react';
import './App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App weatherBox">
      <Header className="App-header" />
      <Main className="App-Main" />
      <Footer className="App-Footer" />
        
    </div>
  );
}

export default App;
