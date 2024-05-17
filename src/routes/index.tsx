import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Main />,
            }

        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;