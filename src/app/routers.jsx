import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage'
import RegisterPage from '../pages/registerPage/registerPage'
import NoPage from '../pages/noPage/noPage'




export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/register',
        element: <RegisterPage /> 
    },  {
        path: '/*',
        element: <NoPage/> 
    }
]);
