import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Users from '../src/pages/Users';
import ReduxDemo from '../src/pages/ReduxDemo';
import ReduxDemoWithMid from '../src/pages/ReduxDemoWithMid';
import TestJsonp from '../src/pages/TestJsonp';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        key: 'home'
    },
    {
        path: '/about',
        component: About,
        exact: true,
        key: 'about'
    },
    {
        path: '/users',
        component: Users,
        exact: true,
        key: 'users'
    },
    {
        path: '/reduxDemo',
        component: ReduxDemo,
        exact: true,
        key: 'reduxDemo'
    },
    {
        path: '/ReduxDemoWithMid',
        component: ReduxDemoWithMid,
        exact: true,
        key: 'ReduxDemoWithMid',
        // ssrGetData: ReduxDemoWithMid.ssrGetData
    },
    {
        path: '/testJsonp',
        component: TestJsonp,
        exact: true,
        key: 'testJsonp'
    }
];

export default routes;