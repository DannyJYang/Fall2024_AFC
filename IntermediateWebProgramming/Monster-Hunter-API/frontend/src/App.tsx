// import React, {useState} from 'react'
import * as React from 'react';
import './App.css'
import Navbar from "./components/Navbar.tsx"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.tsx"
import SearchPage from "./components/pages/SearchPage.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import FavoritePage from "./components/pages/FavoritePage.tsx";
import {useState} from "react";


function App() {

    const [searchInput, setSearchInput] = useState("")

    return (
        <>
            <Navbar searchInput={searchInput} setSearchInput={setSearchInput}></Navbar>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path="/SearchPage" element={<SearchPage searchInput={searchInput} setSearchInput={setSearchInput}/>}/>
                <Route path="/LandingPage" element={<LandingPage/>}/>
                <Route path="/ErrorPage" element={<ErrorPage/>}/>
                <Route path="/FavoritePage" element={<FavoritePage/>}/>
            </Routes>

        </>
    )
}

export default App
