import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AdminApp from "./components/layouts/AdminApp";

const App = () => {

    const [message, setMessage] = useState('from fe');
    const fetchMessage = () => {
        axios.get('http://localhost:9000/testApi')
            .then((response) => {

                const {status, message} = response.data;
                setMessage(message);

            })
            .catch(error => {
                console.error(error)
            });
    };


    useEffect(() => {

    }, []);

    return (
        <div className="App">
            <AdminApp/>
        </div>
    );
}

export default App;
