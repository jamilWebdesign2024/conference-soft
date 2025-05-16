import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Components/IHome/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/conferenceData.json'),
                Component: Home   
            },
            {
                path: 'about',
                loader: ()=>fetch('./overview.json'),
                Component: About
            },
             {
                path: 'details',
                loader: () => fetch('/conferenceData.json'),
                Component: Details
            },
            {
                path: '/details/:id',
                loader: ()=>fetch('/conferenceData.json'),
                Component: Details
            }
        ]
    }
]);

export default router;
