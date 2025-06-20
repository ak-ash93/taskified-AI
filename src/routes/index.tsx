import { createBrowserRouter } from 'react-router';
import Mainlayout from '../layouts/Mainlayout';

import Homepage from '../pages/Homepage';
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
    children: rootRouteChildren,
  },
]);

export default router;
