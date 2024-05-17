import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

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
            },
            {
                path: "terms-conditions",
                element: <TermsAndConditions />,
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            }

        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;