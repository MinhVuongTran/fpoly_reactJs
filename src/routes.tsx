import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import About from './pages/site/About';
import ProductManagement from './pages/admin/Product-Management';
import ProductAdd from './pages/admin/Product-Add';
import ProductEdit from './pages/admin/Product-Edit';
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutWebsite from './layouts/LayoutWebsite';
import HomePage from './pages/site';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWebsite />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/admin',
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: <Navigate to='dashboard' />,
      },
      {
        path: 'dashboard',
        element: (
          <div>
            <h2 className='text-2xl font-bold mb-4'>Dashboard</h2>
          </div>
        ),
      },
      {
        path: 'product',
        element: <ProductManagement />,
      },
      {
        path: 'product/add',
        element: <ProductAdd />,
      },
      {
        path: 'product/:idProduct/edit',
        element: <ProductEdit />,
      },
    ],
  },
]);
