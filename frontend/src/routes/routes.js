import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SamplePageOne from "../pages/SamplePageOne";
import SamplePageTwo from "../pages/SamplePageTwo";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";





const routes = [
    { path: '/', element: <ProtectedRoute routeElement={<HomePage />} />  , routeName: 'HOME'},
    { path: '/login', element: <PublicRoute routeElement={<Login />} />, routeName: 'LOGIN'},
    { path: '/signup', element: <PublicRoute routeElement={<SignUp />} /> , routeName: 'SIGNUP'},
    { path: '/sample-page-one', element: <ProtectedRoute routeElement={<SamplePageOne />} />,   routeName: 'SAMPLE_PAGE_ONE' },
    { path: '/sample-page-two', element: <ProtectedRoute routeElement={<SamplePageTwo />}/> , routeName: 'SAMPLE_PAGE_TWO' },
];

export default routes;