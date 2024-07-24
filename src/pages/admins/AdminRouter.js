import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import Erreur from './Erreur';


const AdminRouter = () => {
    return (
        <>
                <Routes>
                    <Route element={<Home/>}>
                       <Route index element={<Dashboard/>}/>
                    </Route>
                    <Route path="*" element={<Erreur />} /> 
                </Routes>
        </>
    );
};

export default AdminRouter;