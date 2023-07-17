import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


//! Restaurant App Planning
/*
* Header
*  - Logo
*  - Nav Item
* Body
*  - Search
*  - Restaurant Component
*       - Restaurant Cart Component
* Footer
*  - Copyright
*  - Address 
*  - Carrer
*/


const Footer = () => {}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<AppLayout />);