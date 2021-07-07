import React from 'react'
import GallaryList from '../component/gallary/GallaryList';
import Footer from '../component/layout/Footer';
import Header from '../component/layout/Header';
import '../asset/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <Header />
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <GallaryList />
                        </Route>
                        <Route path="type/:type" exact>
                            <GallaryList />
                        </Route>
                    </Switch>
                </Router>
            <Footer />
        </div>
    );
}