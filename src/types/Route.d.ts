import { ReactInstance } from 'react';

interface RouteInterface {
    path: string;
    component: ReactInstance | any;
    layout: ReactInstance | any;
}
