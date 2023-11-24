import React, { useState, ChangeEvent } from "react";

type Props = {
  tema: string;
};

const FormularioCadastroCliente: React.FC<Props> = (props) => {
  const [generoSelecionado, setGeneroSelecionado] = useState < string > ("");

  const handleGeneroChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGeneroSelecionado(event.target.value);
  };

  let estiloBotao = `btn waves-effect waves-light ${props.tema}`;

  console.log("Gênero selecionado:", generoSelecionado);

  return (
    <div className="row">
      <form className="col s12" action="#">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">nome</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">sobrenome</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="social_name" type="text" className="validate" />
            <label htmlFor="first_name">nome social</label>
          </div>
          <div className="input-field col s6">
            <input id="idade" type="number" className="validate" />
            <label htmlFor="last_name">idade</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="cpf" type="text" className="validate" />
            <label htmlFor="cpf">CPF</label>
          </div>
          <div className="input-field col s6">
            <input id="rg" type="number" className="validate" />
            <label htmlFor="rg">RG</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="telefone" type="text" className="validate" />
            <label htmlFor="telefone">telefone</label>
          </div>
          <div className="input-field col s6">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">e-mail</label>
          </div>
        </div>

        <div className="row space ">
          <p>
            <label>
              <p>selecione o genero ao qual você se identifica</p>
              <select
                value={generoSelecionado}
                onChange={handleGeneroChange}
                className="browser-default"
              >
                <option value="" disabled>
                  Selecione o gênero
                </option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="nao_declarado">Não Declarado</option>
                <option value="lgbtqia+">LGBTQIA+</option>
                <option value="aviao_de_caca">Avião de Caça</option>
                <option value="autobot">Autobot</option>
              </select>
            </label>
          </p>
        </div>

        <div className="row">
          <div
            className="col s12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className={estiloBotao}
              type="submit"
              name="action"
              style={{ color: "purple" }}
            >
              Submit
              <i className="material-icons right ">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastroCliente;


// export default function FormularioCadastroCliente(props){
//     const estiloBotao = `btn waves-effect waves-light ${props.tema}`
//     return (
//         <div className="row">
//             <form className="col s12">
//                 <div className="row">
//                     <div className="input-field col s6">
//                         <input id="first_name" type="text" className="validate" />
//                         <label htmlFor="first_name">nome</label>
//                     </div>
//                     <div className="input-field col s6">
//                         <input id="last_name" type="text" className="validate" />
//                         <label htmlFor="last_name">sobrenome</label>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="input-field col s6">
//                         <input id="telefone" type="text" className="validate" />
//                         <label htmlFor="telefone">telefone</label>
//                     </div>
//                     <div className="input-field col s6">
//                         <input id="email" type="email" className="validate" />
//                         <label htmlFor="email">e-mail</label>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col s12">
//                         <button className={estiloBotao} type="submit" name="action">Submit
//                             <i className="material-icons right">send</i>
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }