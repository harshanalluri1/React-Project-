import React from 'react';
import{Blog,Feature,Footer,Header,Possibility,WhatGPT3} from "./container"
import {Cta, Brand,NavBar} from "./components"
import "./app.css"

function App() {
    return ( 
        <div className='App'>
            <div className='gradient__bg'>
                <NavBar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Feature/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
     );
}

export default App;