import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from "./components/Footer";
// import Image from "./components/Image";
// import Img from "./components/Img.json"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        {/* <Main /> */}
        <Footer />

      </div>
    );
  }

}

export default App;
