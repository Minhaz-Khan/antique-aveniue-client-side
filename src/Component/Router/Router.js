import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/User/Login";
import SignUp from "../Pages/User/SignUp";
import AllSalePost from "../Pages/AllSalePost/AllSalePost";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import DashboardLayout from "../LayOut/DashboardLayout/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'singup',
                element: <SignUp></SignUp>
            },
            {
                path: 'allSalePost/:findName',
                element: <PrivetRoute> <AllSalePost></AllSalePost></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allSalePost?categorie=${params.findName}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>
            }
        ]
    }
])

export default router