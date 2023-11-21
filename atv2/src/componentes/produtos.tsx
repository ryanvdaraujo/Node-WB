import React, { Component } from "react";

type props = {
  tema: string
}

export default class ListaProdutos extends Component<props> {
  render() {
      let estilo = `collection-item active1 ${this.props.tema}`
      let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`

      return (
          <div className="collection">
              <a className="collection-item">produto 1</a>
              <a className={estilo}>Produto 2</a>
              <a className="collection-item">Produto 3</a>
              <a className={estilo}>Produto 4</a>

              <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

              <button className={estiloBotao} type="submit" name="action">
                  add/retirar com relação ao cliente
                  <i className="material-icons right">send</i>
                </button>
            </div>
          </div>
      )
  }
}