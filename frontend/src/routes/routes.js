import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SamplePageOne from "../pages/SamplePageOne";
import SamplePageTwo from "../pages/SamplePageTwo";
import SignUp from "../pages/SignUp";





const routes = [
    { path: '/', element: <HomePage />, routeName: 'HOME'},
    { path: '/login', element: <Login />, routeName: 'LOGIN'},
    { path: '/signup', element: <SignUp />, routeName: 'SIGNUP'},
    { path: '/sample-page-one', element: <SamplePageOne />, routeName: 'SAMPLE_PAGE_ONE' },
    { path: '/sample-page-two', element: <SamplePageTwo />, routeName: 'SAMPLE_PAGE_TWO' },
];

export default routes;