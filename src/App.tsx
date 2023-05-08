import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import LogIn from "./components/pages/LogIn";
import Main from "./components/pages/Main";
import Favorite from "./components/pages/favorites";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<LogIn/>}/>
                <Route path={'/main'} element={<Main/>}/>
                <Route path={'/favorite'} element={<Favorite/>}/>
            </Routes>
        </>
    );
}

export default App;
