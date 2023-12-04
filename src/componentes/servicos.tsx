import React, { Component } from "react";
import SearchBar from "./searchBar"


type props = {
  tema: string
}

export default class ListaServicos extends Component<props> {
  render() {
      let estilo = `collection-item active1 ${this.props.tema}`
      let estiloBotao = `btn waves-effect waves-light ${this.props.tema}` 

      return (
          <div className="collection">

<div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="col s3">
                        <button className="right-align">
                            nome do serviço
                            <i className="material-icons">filter_list</i>
                        </button>
                    </div>
                    <div className="col s3">
                        <button className="right-align">
                            quantidade
                            <i className="material-icons">filter_list</i>
                        </button>
                    </div>
                    <div className="col s3">
                        <button className="right-align">
                            preço do serviço
                            <i className="material-icons">filter_list</i>
                        </button>
                    </div>
                    <div className="col s3">
                        <button className="right-align">
                            valor total a pagar
                            <i className="material-icons">filter_list</i>
                        </button>
                    </div>
                    <div className="col s6">
                        <SearchBar />
                    </div>
                </div>

              <a className="collection-item">servico 1</a>
              <a className={estilo}>servico 2</a>
              <a className="collection-item">servico 3</a>
              <a className={estilo}>servico 4</a>
          
              <div className="row" style={{ display: 'flex', justifyContent: 'center',}}>

              <button className={estiloBotao} type="submit" name="action" style={{color: "purple"}}>
                  relacionar/remover serviço ao cliente
                  <i className="material-icons right" >send</i>
                </button>

                <button className={estiloBotao} type="submit" name="action" style={{color: "purple" , marginLeft: '15%' }}>
                  atualizar serviço
                  <i className="material-icons right">send</i>
                </button>
                </div>
          </div>
      )
  }
}