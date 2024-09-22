import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {

  const Layout = () => {
    return(
      <div>
        
        <NavBar />
        <div style={{display: "flex"}}>
        <LeftBar />
        <Outlet />
        <RightBar />
       
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])
  return (
    <>
      <div>
        {/* <Register/> */}
        
      </div>

      <RouterProvider router = {router} />
    </>
  );
}

export default App;
