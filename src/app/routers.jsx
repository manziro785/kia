import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage'
import RegisterPage from '../pages/registerPage/registerPage'
import NoPage from '../pages/noPage/noPage'
import Dotareg from "../pages/registerPage/dota-reg/dota-reg";
import Regcs from "../pages/registerPage/cs-reg/cs-reg";
import Pubgreg from "../pages/registerPage/pubg-reg/pubg-reg";




export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/register-dota',
        element: <Dotareg/> 
    }, 
    {
        path: '/register-cs',
        element: <Regcs /> 
    },
    {
        path: '/register-pubg',
        element: <Pubgreg /> 
    }, {
        path: '/*',
        element: <NoPage/> 
    }
]);
