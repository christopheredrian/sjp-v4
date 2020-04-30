import React, {useState} from 'react';

import AdminSideBar from "./AdminSidebar";
import AdminTopBar from "./AdminTopBar";

const AdminApp = () => {


    const toggleShowSidebar = () => {
        document.getElementById('body').classList.toggle('sidenav-toggled');
    };

    return (
        <>
            <AdminTopBar toggleShowSidebar={toggleShowSidebar}/>
            <AdminSideBar/>

        </>
    );
};

export default AdminApp;