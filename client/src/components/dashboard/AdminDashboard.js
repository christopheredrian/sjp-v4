import React from "react";
import {Card, Button} from '../ingredients'
import * as Icon from 'react-feather';

const AdminDashboard = () => {
    return (
        <Card header={(
            <>
                <Icon.Calendar size={16} className={'mr-2'}/>
                <span> Server Information</span>
            </>
        )}>

            <p>
                <strong>IP ADDRESS</strong>: 192.168.1.1
            </p>
            <em>
                Note: You can type the ip address above on another computer if you are connected on the same network
            </em>
        </Card>
    );
};

export default AdminDashboard;
