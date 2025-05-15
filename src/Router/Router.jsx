import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Components/IHome/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/conferenceData.json'),
                Component: Home   // ✅ Component → element
            },
            {
                path: 'about',
                Component: About
            }
        ]
    }
]);

export default router;
