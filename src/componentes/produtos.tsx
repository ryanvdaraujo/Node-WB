import React from "react";
import SearchBar from "./searchBar.tsx";

export default function ListaProdutos ({ tema }) {
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
            nome do Produto
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
            preço do produto
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
        <summary className="collection-item">Produto 1</summary>
        <p>Preço: 20,00</p>
        <p>Id: 01</p>
      </details>
      <details>
        <summary className={estilo}>Produto 2</summary>
        <p>Preço: 30,00</p>
        <p>Id: 02</p>
      </details>
      <details>
        <summary className="collection-item">Produto 3</summary>
        <p>Preço: 28,00</p>
        <p>Id: 03</p>
      </details>
      <details>
        <summary className={estilo}>Produto 4</summary>
        <p>Preço: 25,00</p>
        <p>Id: 04</p>
      </details>

      <div
        className="row"
        style={{ display: "flex", justifyContent: "center"}}
      >
        <button
          className={estiloBotao}
          type="submit"
          name="action"
          style={{ color: "purple" }}
        >
          add/retirar com relação ao cliente
          <i className="material-icons right">send</i>
        </button>

        <button
          className={estiloBotao}
          type="submit"
          name="action"
          style={{ color: "purple", marginLeft: "15%" }}
        >
          atualizar produto
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};