import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Auth from "../Layout/Auth";

export const authRoutes = {
    path: "/auth",
    element: <Auth />,
    children: [
        {
            index: true,
            element: <Login />,
        },
        {
            path: "signup",
            element: <Signup />
        },
        {
            path: "fotgot-password",
            element: <ForgotPassword />
        },
    ],
};
