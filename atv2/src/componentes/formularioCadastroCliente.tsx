import React, { Component } from "react";

type Props = {
  tema: string;
};

type State = {
  generoSelecionado: string;
};

export default class FormularioCadastroCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      generoSelecionado: "",
    };
  }

  handleGeneroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ generoSelecionado: event.target.value });
  };

  render() {
    let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
  
    console.log("Gênero selecionado:", this.state.generoSelecionado);
  
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
                <input id="checkbox_masculino" type="checkbox" />
                <span style={{ marginRight: '75px' }}>masculino</span>                
              </label>
              <label>
                <input id="checkbox_feminino" type="checkbox" />
                <span style={{ marginRight: '75px' }}>feminino</span>
              </label>
              <label>
              <input id="checkbox_na" type="checkbox" />
                <span style={{ marginRight: '75px' }}>não declarado</span>
              </label>
              <label>
                <input id="checkbox_lgbtqia+" type="checkbox" />
                <span style={{ marginRight: '75px' }}>lgbtqia+</span>
              </label>  
              <label>
                <input id="checkbox_aviao" type="checkbox" />
                <span style={{ marginRight: '75px' }}>aviao de caça </span>
              </label>
              <label>
                <input id="checkbox_autobot" type="checkbox" />
                <span> autobot</span>
              </label>
                
            </p>
          </div>
  
          <div className="row">
            <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
     

              <button
                className={estiloBotao}
                type="submit"
                name="action" style={{color: "purple"}}>
                  
                Submit
                <i className="material-icons right ">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }}