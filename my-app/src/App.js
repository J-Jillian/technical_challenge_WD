import React from 'react';
import { ReactDOM } from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Allphones from './components/Allphones';
import Phone from './components/Phone';

function App(){
    return (
        <Routes>
        <Route path='/phones' element={<Allphones />}/>
        <Route path='/phones/:id' element={<Phone />}/>
        <Route path='*' element={<ErrorPage />} />
        </Routes>  
        
    )
}

export default App;