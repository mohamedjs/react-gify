import React, { Component } from "react";
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import GallaryList from './component/gallary/GallaryList';
import './asset/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        	<GallaryList />
        <Footer />
      </div>
    );
  }
}

export default App;