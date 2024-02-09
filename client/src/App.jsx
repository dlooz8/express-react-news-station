import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import UserProfile from './pages/UserProfile';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/profile',
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

function App(props) {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

