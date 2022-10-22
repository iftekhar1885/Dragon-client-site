import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Catagory/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Login/Register";
import News from "../pages/News/News/News";
import Profile from "../pages/Shared/others/Profile/Profile";
import TermAndConditions from "../pages/Shared/others/TermAndConditions/TermAndConditions";
import PrivateRoute from "./privateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
           {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`http://localhost:5000/news`)
           },
           {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
           },
           {
            path: '/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
           },
           {
            path:'/login',
            element: <Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path: '/terms',
            element: <TermAndConditions></TermAndConditions>
           },
           {
            path: '/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
           },
        ]
    }
])