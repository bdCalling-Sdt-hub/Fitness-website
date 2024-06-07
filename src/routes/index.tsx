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
import ContactUs from "../pages/ContactUs";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Academy from "../pages/Academy";
import FreeClass from "../pages/FreeClass";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import Studio from "../pages/Studio";
import Payment from "../pages/Payment";
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
                path: "payment",
                element: <Payment />,
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
            },
            {
                path: "contact-us",
                element: <ContactUs />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "product-details/:id",
                element: <ProductDetails />,
            },
            {
                path: "academy",
                element: <Studio />,
            },
            {
                path: "academy/:id",
                element: <Academy />,
            },
            {
                path: "free-class",
                element: <FreeClass />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order",
                element: <Order />,
            },

        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;