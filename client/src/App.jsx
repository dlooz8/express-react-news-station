import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import SignIn from './pages/SignIn';

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
        element: <div>Hello</div>,
      },
      {
        path: '/news',
        element: <NewsList />,
      },
      {
        path: '/signin',
        element: <SignIn />,
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

