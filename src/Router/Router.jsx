import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HomeLayout,
            children:[
                
            ]
        }
    ]
)

export default router;