import React from 'react';
import Home from './Home';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes } from "react-router-dom";

export default function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/searched/:search' element={<Searched />} />
            <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
    )
}
