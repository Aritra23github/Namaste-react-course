import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />
    },
    {
        path: '/about',
        element: <About />
    }
]);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);