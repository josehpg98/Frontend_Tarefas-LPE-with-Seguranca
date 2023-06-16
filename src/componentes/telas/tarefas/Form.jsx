import { useContext } from "react";
import Alerta from "../../Alerta";
import TarefaContext from "./TarefaContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CampoSelect from "../../comuns/CampoSelect";

function Form() {

    
    const { objeto, handleChange, acaoCadastrar,
        alerta, listaPessoas } = useContext(TarefaContext);

    return (
        <Dialogo id="modalEdicao" titulo="Edição de Tarefas"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Codigo" tipo="number"
                name="codigo" value={objeto.codigo} onchange={handleChange}
                requirido={false} msgvalido=""
                msginvalido="" readonly={true}
                maxCaracteres={5} />
            <CampoEntrada id="txtTitulo" label="Titulo" tipo="text"
                name="titulo" value={objeto.titulo} onchange={handleChange}
                requirido={true} msgvalido="Titulo OK"
                msginvalido="Informe o titulo" readonly={false}
                maxCaracteres={5} />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao} onchange={handleChange}
                requirido={true} msgvalido="Descrição OK"
                msginvalido="Informe a descrição" readonly={false}
                maxCaracteres={40} />              
            <CampoSelect id="selecPessoa" label="Pessoa" 
                name="pessoa" value={objeto.pessoa} onchange={handleChange}
                requirido={true} msgvalido="Pessoa OK"
                msginvalido="Selecione a pessoa">
                  {
                    listaPessoas.map((pes) => (
                        <option key={pes.nome} value={pes.codigo}>
                            {pes.nome}
                        </option>
                    ))
                }          
            </CampoSelect>
        </Dialogo>
    )

}

export default Form;