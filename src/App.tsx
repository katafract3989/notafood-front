import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './views/Home';
import Header from './components/Header';
import Restaurant from "./views/restaurant/Restaurant";
import Checkout from "./views/checkout/Checkout";
import Notifications from "./components/notification/Notifications"

const App = () => {
    return (
        <div className="App">
            <header className="App__header">
                <Header/>
                <Notifications />
            </header>
            <main className="App__main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/restaurant/:id" element={<Restaurant/>}/>
                    <Route path="/checkout" element={<Checkout />}/>
                </Routes>
            </main>
            <footer className="App__footer" />
        </div>
    );
}

export default App;
