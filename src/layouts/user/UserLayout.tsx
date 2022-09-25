import cls from "./UserLayout.module.scss"
import Notifications from "../../components/notification/Notifications";
import {Route, Routes} from "react-router-dom";
import Login from "../../views/login/Login";
import Home from "../../views/Home";
import Checkout from "../../views/checkout/Checkout";
import React from "react";
import Header from "../../components/Header";
import Restaurant from "../../views/restaurant/Restaurant";

const UserLayout = () => {
    return (
        <div>
            <header className="App__header">
                <Header/>
                <Notifications/>
            </header>
            <main className="App__main">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/restaurant/:id" element={<Restaurant/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </main>
        </div>
    )
}
export default UserLayout
