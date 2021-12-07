import React from 'react'
import Footer from '../component/layout/Footer';
import Header from '../component/layout/Header';
import '../asset/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GallaryList from './GallaryList'
import Tracker from './Tracker';
import Social from './Social';
import User from './user';
import UserForm from '../component/user/UserForm';
export default function Index() {
    return (
        <div>
            <Router>
                <Header />
                <Switch> 
                    <Route path="/" exact component={GallaryList} />
                    <Route path="/tracker" component={Tracker} />
                    <Route path="/social" component={Social} />
                    <Route path="/user" exact component={User} />
                    <Route path="/add-user" exact component={UserForm} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}