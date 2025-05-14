// import { createBrowserRouter } from "react-router";
// import HomeLayout from "../Layouts/Home/HomeLayout";
// import Home from "../Components/IHome/Home";

// const router = createBrowserRouter(
//     [
//         {
//             path: "/",
//             Component: HomeLayout,
//             children:[
//                 {
//                     index: true, 
//                     path: '/',
//                     loader:()=>fetch('/conferenceData.json'),
//                     Component: Home

//                 }
//             ]
//         }
//     ]
// )

// export default router;


import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Components/IHome/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,  // ✅ Component → element
        children: [
            {
                index: true,
                loader: () => fetch('/conferenceData.json'),
                Component: Home   // ✅ Component → element
            }
        ]
    }
]);

export default router;
