import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "./auth.routes";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    authRoutes,
    {
        path: "*",
        element: <NotFound />,
    },
]);
