import { Navigate } from "react-router-dom";

import Autenticacao from "./Autenticacao";

const WithAuth = (Component) => {
    const AuthRoute = () => {
        const isAuth = Autenticacao.pegaAutenticacao() ? true : false;
        if (isAuth){
            return <Component/>
        } else {
            return <Navigate to="/login"/>;
        }
    }
    return AuthRoute;
}

export default WithAuth;