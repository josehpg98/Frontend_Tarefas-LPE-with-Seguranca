import { useContext } from "react";
import Alerta from "../../Alerta";
import PessoaContext from "./PessoaContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar,
        alerta } = useContext(PessoaContext);

    return (
        <Dialogo id="modalEdicao" titulo="Edição de Pessoas"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Codigo" tipo="number"
                name="codigo" value={objeto.codigo} onchange={handleChange}
                requirido={false} msgvalido=""
                msginvalido="" readonly={true}
                maxCaracteres={5} />
            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                name="nome" value={objeto.nome} onchange={handleChange}
                requirido={true} msgvalido="Nome OK"
                msginvalido="Informe o nome" readonly={false}
                maxCaracteres={40} />
            <CampoEntrada id="txtCidade" label="Cidade" tipo="text"
                name="cidade" value={objeto.cidade} onchange={handleChange}
                requirido={true} msgvalido="Cidade OK"
                msginvalido="Informe a cidade" readonly={false}
                maxCaracteres={40} />
            <CampoEntrada id="txtUf" label="UF" tipo="text"
                name="uf" value={objeto.uf} onchange={handleChange}
                requirido={true} msgvalido="uf OK"
                msginvalido="Informe a uf" readonly={false}
                maxCaracteres={4} />
        </Dialogo>
    )

}

export default Form;