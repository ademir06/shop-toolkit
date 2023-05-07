import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import LogIn from "./components/pages/LogIn";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<LogIn/>}/>
            </Routes>
        </>
    );
}

export default App;
