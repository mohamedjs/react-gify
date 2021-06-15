import React from 'react'
import GallaryList from '../component/gallary/GallaryList';
import Footer from '../component/layout/Footer';
import Header from '../component/layout/Header';
import '../asset/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            <Header />
                <GallaryList />
            <Footer />
        </div>
    );
}