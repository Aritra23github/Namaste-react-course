import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import ErrorElement from "./components/ErrorElement";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
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

const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));

const Footer = () => {}

const AppLayout = () => {
    const [userName, setUserName] = useState(null);

    //Authentication
    useEffect(() => {
        setUserName("Aritra Jana");
    }, []);

    return (
        <Provider store={appStore}>
            <userContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </userContext.Provider>
        </Provider>
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
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resturant-menu/:id',
                element: <ResturantMenu />
            },
            {
                path: '/cart',
                element: (
                    <Suspense fallback={<Shimmer/>}>
                        <Cart />
                    </Suspense>
                )
            }
        ],
        errorElement: <ErrorElement />
    }
]);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);