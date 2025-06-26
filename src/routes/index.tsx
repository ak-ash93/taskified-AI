import { createBrowserRouter } from 'react-router';
import Mainlayout from '../layouts/Mainlayout';

import Homepage from '../pages/Homepage';
import RootError from '../pages/RootError';
import type { RouteObject } from 'react-router';

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <Homepage />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    errorElement: <RootError />,
    children: rootRouteChildren,
  },
]);

export default router;
