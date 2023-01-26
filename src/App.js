import React from 'react';

import { Footer, Header, About, Minting } from './containers';
import { Navbar } from './components';
import './App.css';
import Collection from './containers/collection/Collection';
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Collection/>
    <Minting/>
    <About/>
    <Footer />
  </div>
);

export default App;
