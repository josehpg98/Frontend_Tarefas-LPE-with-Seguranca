import { NavLink, Outlet } from "react-router-dom";
import Autenticacao from "./seguranca/Autenticacao";

const MenuPrivado = () => {

    const autenticacao = Autenticacao.pegaAutenticacao();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/privado">TAREFAS</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/privado">Home</NavLink>
                            </li>
                            {autenticacao &&
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/privado" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Manutenções
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <NavLink className="dropdown-item" to="pessoas">Pessoas</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="tarefas">Tarefas</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/privado" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {autenticacao ? "Usuario: " + autenticacao.nome_usuario
                                        : "Usuário"}
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        {autenticacao
                                            ?
                                            <NavLink className="dropdown-item" to="/"
                                                onClick={() => Autenticacao.logout()}>Logout</NavLink>
                                            : <NavLink className="dropdown-item" to="/login">Login</NavLink>}

                                    </li>                                  
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default MenuPrivado;