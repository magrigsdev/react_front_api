import React from "react";
import { BrowserRouter } from "react-router-dom";

import AdminRouter from "./pages/admins/AdminRouter";

const App = () => {
    return (
        <>
            <BrowserRouter>   
                    <AdminRouter/>      
            </BrowserRouter>
   
        </>
    );
}
                    
export default App;