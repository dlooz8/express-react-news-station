import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Registration from './pages/Registration';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import { useState } from 'react';

const HeaderLayout = () => {

  const [isAuth, setIsAuth] = useState(false);

  return(
    <>
      <header>
        <Navbar authContext={ {isAuth, setIsAuth} }/>
      </header>
      <Outlet context={[ isAuth, setIsAuth ]} />
    </>
  )
};

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/feed",
        element: <Main />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/users',
        element: <UserProfile />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '*',
        element: <NotFound />
      }
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

