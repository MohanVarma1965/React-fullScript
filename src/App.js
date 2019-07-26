import React from 'react';
import './styles/app.css';
import Header from './containers/header';
import Tours from './containers/tours';
import Footer from './containers/footer';
import SearchImage from "./containers/searchImage";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <SearchImage/>
                <Tours/>
                <Footer/>
            </main>
        </div>
    );
}

export default App;
