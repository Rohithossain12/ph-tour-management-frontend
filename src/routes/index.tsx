import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/User/Bookings";
import verify from "@/pages/Verify";
import generateRoutes from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        Component: About
      }
    ]
  },
  // Admin
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [...generateRoutes(adminSidebarItems)]
  },

  // User
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      {
        path: "bookings",
        Component: Bookings
      },

    ]
  },
  {
    Component: Login,
    path: "/login"
  },
  {
    Component: Register,
    path: "/register"
  },
  {
    Component: verify,
    path: "/verify"
  },

]);