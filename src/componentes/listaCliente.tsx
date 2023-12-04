import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import SearchBar from "./searchBar"

type Props = {
    tema: string
}

export default class ListaCliente extends Component<Props> {
    render() {
        let estilo = `collection-item active1 ${this.props.tema}`;
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;

        return (
            <div className="collection">
                <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="col s3">
                        <button className="right-align">
                            nome do cliente
                            <i className="material-icons">filter_list</i>
                        </button>
                    </div>
                    <div className="col s3">
                        <button className="right-align">
                            serviços contratados
                            <i className="material-icons">filter_list</i>
                        </button>
                    </div>
                    <div className="col s3">
                        <button className="right-align">
                            produtos comprados
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
                <a className="collection-item">Cliente 1</a>
                <a className={estilo}>Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className={estilo}>Cliente 4</a>

                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className={estiloBotao} type="submit" name="action" style={{ color: "purple" }}>
                        alterar dados do cliente
                        <i className="material-icons right">send</i>
                    </button>
                    <button className={estiloBotao} type="submit" name="action" style={{ color: "purple", marginLeft: '15%' }}>
                        apagar cliente
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        );
    }
}
