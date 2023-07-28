import { RouteInterface } from '~/types/Route';
import { HomeLayout } from '~/layouts';

import Home from '~/pages/Student/Home/Home';

const publicRoutes: RouteInterface[] = [
    {
        path: '/',
        component: Home,
        layout: HomeLayout,
    },
];

const privateRoutes: RouteInterface[] = [];

export { privateRoutes, publicRoutes };
