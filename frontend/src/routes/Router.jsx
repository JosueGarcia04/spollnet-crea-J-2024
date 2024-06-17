import React from 'react';
//router frontend
import { createBrowserRouter } from 'react-router-dom'
import { Index } from '../pages/by us/no logued/Index'
import { Root } from '../pages/Root'
//general
import NotFound from '../pages/not found/404'
import Faq from '../pages/by us/general/faq'
import AboutUs from '../pages/by us/general/about us'
import Contact  from '../pages/by us/general/contact'
import News from '../pages/by us/general/news'
//coordinador
import Coordinator from '../pages/coordinator/main'
//student
import SignIn from '../pages/forms/Sign-in'
import Login from '../pages/forms/login'
import Profile from '../pages/student/profile'
import { Statistics } from '../pages/statistics/statistics' 


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        children: [
            {
                path: "/",
                element: <Index />
            },
            {
                path:"/faq",
                element:<Faq/>
            },
            {
                path:"/about us",
                element:<AboutUs/>
            },
            {
                path:"Sign-in",
                element:<SignIn/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "statistics",
                element:<Statistics/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"news",
                element:<News/>
            },
            {
                path:"main",
                element:<Coordinator/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])