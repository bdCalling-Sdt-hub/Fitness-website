import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";

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
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
            {
                path: "blogs",
                element: <Blogs />,
            },
            {
                path: "blog-details/:id",
                element: <BlogDetails />,
            }

        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;