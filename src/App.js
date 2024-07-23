import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erreur from "./admins/Erreur";
import Home from "./admins/Home";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="*" element={<Erreur/> } />
                </Routes>
            </BrowserRouter>
   
        </>
    );
}
                    
export default App;