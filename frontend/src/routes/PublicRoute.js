import isAuthenticated from "../utils/authenticateUser";
import {Navigate} from "react-router-dom";
import {getRoutePath} from "./NamedLink";

const PublicRoute = ({ routeElement}) => {

    return !isAuthenticated() ? routeElement : <Navigate to={getRoutePath('HOME')} />;
}

export default PublicRoute;