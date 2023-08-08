import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorElement from "./components/ErrorElement";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ResturantMenu from "./components/ResturantMenu";

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
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resturant-menu/:id',
                element: <ResturantMenu />
            }
        ],
        errorElement: <ErrorElement />
    }
]);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);