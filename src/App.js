import React, { Component } from "react";
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;