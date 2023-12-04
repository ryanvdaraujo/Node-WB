import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import SearchBar from "./searchBar.tsx";

export default function ListaCliente (props) {
    let estilo = `collection-item active1 ${props.tema}`;
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`;

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
            <details>
                <summary className="collection-item">Cliente 1</summary>
                <p>RG: 00.000.000-0</p>
                <p>CPF: 000.000.000-00</p>
                <p>Endereço: Rua dos bobos, no 0</p>
            </details>
            <details>
                <summary className={estilo}>Cliente 2</summary>
                <p>RG: 00.000.000-1</p>
                <p>CPF: 000.000.001-00</p>
                <p>Endereço: Rua dos bobos, no 1</p>
            </details>
            <details>
                <summary className="collection-item">Cliente 3</summary>
                <p>RG: 00.000.000-2</p>
                <p>CPF: 000.000.001-20</p>
                <p>Endereço: Rua dos bobos, no 2</p>
            </details>
            <details>
                <summary className={estilo}>Cliente 4</summary>
                <p>RG: 00.000.000-3</p>
                <p>CPF: 000.000.001-30</p>
                <p>Endereço: Rua dos bobos, no 3</p>
            </details>
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
};