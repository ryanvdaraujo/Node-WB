import React, { Component } from "react";


type props = {
  tema: string
}

export default class ListaServicos extends Component<props> {
  render() {
      let estilo = `collection-item active1 ${this.props.tema}`
      let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`

      return (
          <div className="collection">
              <a className="collection-item">servico 1</a>
              <a className={estilo}>servico 2</a>
              <a className="collection-item">servico 3</a>
              <a className={estilo}>servico 4</a>
          
              <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

              <button className={estiloBotao} type="submit" name="action">
                  relacionar/remover serviço ao cliente
                  <i className="material-icons right">send</i>
                </button>
                </div>
          </div>
      )
  }
}