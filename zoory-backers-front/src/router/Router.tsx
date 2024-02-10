import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.tsx";
import Home from "../pages/home/Home.tsx";
import Menu from "../pages/shop/Menu.tsx";
import Signup from "../component/signup/Signup.tsx";
import UpdateProfile from "../pages/dashboard/UpdateProfile.tsx";
import CartPage from "../pages/shop/CartPage.tsx";
import DashboardLayout from "../layout/DashboardLayout.tsx";

import Dashboard from "../pages/dashboard/admin/Dashboard.tsx";
import Users from "../pages/dashboard/admin/Users.tsx";
import AddMenu from "../pages/dashboard/admin/AddMenu.tsx";
import ManageItem from "../pages/dashboard/admin/ManageItem.tsx";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu.tsx";

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
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-items",
        element: <ManageItem />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`http://localhost:6001/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
