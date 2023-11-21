/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active1 ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;

        return (
            <div className="collection">
              <a className="collection-item">Cliente 1</a>
              <a className={estilo}>Cliente 2</a>
              <a className="collection-item">Cliente 3</a>
              <a className={estilo}>Cliente 4</a>
          
              <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

          
                <button className={estiloBotao} type="submit" name="action">
                  alterar dados do cliente
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          );
    }}