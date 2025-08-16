import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "./auth.routes";
import NotFound from "../pages/NotFound";
import Auth from "../Layout/Auth";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

export const router = createBrowserRouter([
    authRoutes,
    {
        path: "*",
        element: <NotFound />,
    },
]);
