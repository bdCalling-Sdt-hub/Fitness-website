import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "profile",
                element: <Profile />,
            }

        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;