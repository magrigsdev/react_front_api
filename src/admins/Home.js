import React from 'react';
import Header from './Header';
import Side from './Side';
import Dashboard from './Dashboard';


const Home = () => {
    return (
        <>
            <Header/>
            <Side/>
            
            <Dashboard/>
        </>
    );
};

export default Home;