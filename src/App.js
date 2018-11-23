import React, { Component } from 'react';
import './App.css';
import Table from './table.js';
import Inform from './information.js';
import Header from './header.js';
import Footer from './footer.js';
import Ecsc from './ecscurs.js';
import Cost from './cost.js';
import Ecsc2 from './ecscurs2';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Inform />
        <Ecsc />
        <Ecsc2 />
        <Cost />
        <Table />
        <Footer />
      </div>
    );
  }
}

export default App;
