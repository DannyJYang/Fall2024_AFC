// import React, {useState} from 'react'
import * as React from 'react';
import './App.css'
import Navbar from "./components/Navbar.tsx"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.tsx"
import SearchPage from "./components/pages/SearchPage.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import FavoritePage from "./components/pages/FavoritePage.tsx";


function App() {


    return (
        <>
            <Navbar></Navbar>
            <SearchPage/>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path="/SearchPage" element={<SearchPage/>}/>
                <Route path="/LandingPage" element={<LandingPage/>}/>
                <Route path="/ErrorPage" element={<ErrorPage/>}/>
                <Route path="/FavoritePage" element={<FavoritePage/>}/>
            </Routes>

        </>
    )
}

export default App
