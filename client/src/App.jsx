import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import UserProfile from "./pages/UserProfile";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import { useOutletContext } from "react-router-dom";
import Footer from "./components/Footer";
import AddPost from "./pages/AddPost";
import Post from "./pages/Post";
import { useState } from "react";

const UserContext = () => {

  const [isUser, setIsUser] = useState({});

  return (
    <>
      <Outlet context={{ isUser, setIsUser }} />
    </>
  );
};

const HeaderLayout = () => {

  const { isUser, setIsUser } = useOutletContext();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet context={{ isUser, setIsUser }} />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserContext />,
      children: [
        {
          path: "/",
          element: <HeaderLayout />,
          children: [
            {
              path: "/feed",
              element: <Main />,
            },
            {
              path: "/news/:id",
              element: <Post />,
            },
            {
              path: "/signin",
              element: <SignIn />,
            },
            {
              path: "/aboutus",
              element: <AboutUs />,
            },
            {
              path: "/users",
              element: <UserProfile />,
            },
            {
              path: "/registration",
              element: <Registration />,
            },
            {
              path: "/addpost",
              element: <AddPost />,
            },
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;