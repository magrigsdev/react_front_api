import React from 'react';
import Header from './Header';
import Side from './Side';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Header/>
            <Side/>
            <Outlet/>
        </>
    );
};

export default Home;