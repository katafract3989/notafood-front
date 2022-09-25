import Notifications from "../../components/notification/Notifications";
import {Route, Routes} from "react-router-dom";
import Login from "../../views/login/Login";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const AdminLayout = () => {
    return (
        <div>
            <header className="App__header">
                <Sidebar />
                <Notifications/>
            </header>
            <main className="App__main">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default AdminLayout;
