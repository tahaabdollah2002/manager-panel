import React, { useState } from 'react';
import Content from './Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import {MainContext} from './contexts/MainContext'

const App = ()=>{

    const [showMenu , setShowMenu] = useState(false);

    return (
        <BrowserRouter>
            <div>
                <MainContext.Provider value={{showMenu , setShowMenu}}>
                    <Sidebar/>
                    <Content/>            
                </MainContext.Provider>
            </div>
        </BrowserRouter>
    ) 
}

export default App;
