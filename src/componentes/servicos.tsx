import React from "react";
import SearchBar from "./searchBar.tsx";

type Props = {
  tema: string;
};

export default function ListaServicos ({ tema }) {
  const estilo = `collection-item active1 ${tema}`;
  const estiloBotao = `btn waves-effect waves-light ${tema}`;

  return (
    <div className="collection">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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

      <details>
        <summary className="collection-item">Serviço 1</summary>
        <p>Preço: 20,00</p>
        <p>Id: 01</p>
      </details>
      <details>
        <summary className={estilo}>Serviço 2</summary>
        <p>Preço: 30,00</p>
        <p>Id: 02</p>
      </details>
      <details>
        <summary className="collection-item">Serviço 3</summary>
        <p>Preço: 28,00</p>
        <p>Id: 03</p>
      </details>
      <details>
        <summary className={estilo}>Serviço 4</summary>
        <p>Preço: 25,00</p>
        <p>Id: 04</p>
      </details>

      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          className={estiloBotao}
          type="submit"
          name="action"
          style={{ color: "purple" }}
        >
          relacionar/remover serviço ao cliente
          <i className="material-icons right">send</i>
        </button>

        <button
          className={estiloBotao}
          type="submit"
          name="action"
          style={{ color: "purple", marginLeft: "15%" }}
        >
          atualizar serviço
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};