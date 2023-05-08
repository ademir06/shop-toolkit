import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import LogIn from "./components/pages/LogIn";
import Main from "./components/pages/Main";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<LogIn/>}/>
                <Route path={'/main'} element={<Main/>}/>
            </Routes>
        </>
    );
}

export default App;
