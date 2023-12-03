import React, { useState, ChangeEvent } from "react";

type Props = {
  tema: string;
};

export default function FormularioCadastroCliente(props: Props) {
  const [generoSelecionado, setGeneroSelecionado] = useState <string> ("");

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
            <label htmlFor="first_name">Nome</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Sobrenome</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="social_name" type="text" className="validate" />
            <label htmlFor="first_name">Nome social</label>
          </div>
          <div className="input-field col s6">
            <input id="idade" type="number" className="validate" />
            <label htmlFor="last_name">Idade</label>
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
            <label htmlFor="telefone">Telefone</label>
          </div>
          <div className="input-field col s6">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">e-mail</label>
          </div>
        </div>

        <div className="row space ">
          <p>
            <label>
              <p>Selecione o gênero ao qual você se identifica:</p>
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

        <div className="row margin-top">
          <div
            className="col s12 padding"
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
  )
};