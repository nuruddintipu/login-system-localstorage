import {Navigate} from "react-router-dom";
import {getRoutePath} from "./NamedLink";
import isAuthenticated from "../utils/authenticateUser";


const ProtectedRoute = ({ routeElement}) => {
    return isAuthenticated() ? routeElement : <Navigate to={getRoutePath('LOGIN')} />;
};
export default ProtectedRoute;