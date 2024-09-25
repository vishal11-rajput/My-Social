import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {

  const currentUser = true; //temporary for the f-end part

  const Layout = () => {
    return(
      <div className="theme-dark">
        <NavBar />
        <div style={{display: "flex"}}>
          <LeftBar />
        <div style={{flex : 6}}>
            <Outlet />
        </div>
        <RightBar />
       
        </div>
      </div>
    )
  }

  const ProtectdRotues = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" /> //checks if logged in if not logged in then redirects
    }

    return children  //if logged in the returns the page layout
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectdRotues> <Layout /> </ProtectdRotues> ,
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
