import React, {useEffect} from 'react';
import UserLayout from "../src/layouts/user/UserLayout";
import AdminLayout from "../src/layouts/admin/AdminLayout";
import {useTypedSelector} from "../src/hooks/useTypedSelector";
import {Roles} from "../src/common/constants/Roles"
import BaseService from "../src/common/services/BaseService";
const App = () => {

    const baseService = new BaseService();
    const role = useTypedSelector(state => state.mainReducer.user?.role)
    const layout = role !== Roles.admin ? <UserLayout /> : <AdminLayout />


    return (
        <div className="App">
            {layout}
            <footer className="App__footer"/>
        </div>
    );
}

export default App;
