import jwt_decode from "jwt-decode";

const NOME_APP = 'TAREFAS';

const pegaAutenticacao = () => {
    const localStorageAutenticacao = 
    localStorage.getItem(NOME_APP + '/autenticacao');
    const autenticao = localStorageAutenticacao ?
    JSON.parse(localStorageAutenticacao) : null;
    if (autenticao === null){
        return null;
    }
    if (autenticao.auth === false){
        return null;
    } else {
        var decoded = jwt_decode(autenticao.token);
        if (decoded.exp <= Math.floor(new Date() / 1000)){
            console.log('Token expirado');
            logout();
            return null;
        } else {
            console.log('Token válido');
            return autenticao;
        }
    }
}

const logout = () => {
    localStorage.setItem(NOME_APP + '/autenticacao', 
    JSON.stringify({"auth" : false, "token": ""}));
}

const gravaAutenticacao = (json) => {
    const decodificado = jwt_decode(json.token);
    const usuario = decodificado.usuario;
    json.nome_usuario = usuario.nome;
    json.email_usuario = usuario.email;
    localStorage.setItem(NOME_APP + '/autenticacao',JSON.stringify(json));
}

export default { pegaAutenticacao, gravaAutenticacao, logout };