import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import LogIn from "./components/pages/LogIn";
import Main from "./components/pages/Main";
import Basket from "./components/pages/Basket";
import DetailCard from "./components/pages/Main/DetailCard";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<LogIn/>}/>
                <Route path={'/main'} element={<Main/>}/>
                <Route path={'/basket'} element={<Basket/>}/>
                <Route path={'/detail/:ID'} element={<DetailCard/>}/>
            </Routes>
        </>
    );
}

export default App;
