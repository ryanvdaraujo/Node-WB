import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import SearchBar from "./searchBar.js";

type Props = {
  tema: string;
  botoes: string[];
  seletorView: (valor: string, evento: React.MouseEvent) => void;
};

const BarraNavegacao: React.FC<Props> = (props) => {
  useEffect(() => {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []);

  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = props.botoes.map((valor) => (
        <li key={valor}>
          <a onClick={(e) => props.seletorView(valor, e)}>{valor}</a>
        </li>
      ));
      return lista;
    }
  };

  let estilo = `${props.tema}`;

  return (
    <>
      <nav className={estilo}>
        <div className="nav-wrapper">
          <a className="brand-logo">World Beauty </a>
          <a data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">{gerarListaBotoes()}</ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-menu">
        {gerarListaBotoes()}
      </ul>
    </>
  );
};

export default BarraNavegacao;


// /* eslint-disable jsx-a11y/anchor-is-valid */
// import 'materialize-css/dist/css/materialize.min.css'

// export default function BarraNavegacao(props) {

//     const gerarListaBotoes = () => {
//         if (props.botoes.length <= 0) {
//             return <></>
//         } else {
//             let lista = props.botoes.map(valor =>
//                 <li key={valor}><a onClick={(e) => props.seletorView(valor, e)}>{valor}</a></li>
//             )
//             return lista
//         }
//     }

//     return (
//         <>
//             <nav className={props.tema}>
//                 <div className="nav-wrapper">
//                     <a className="brand-logo">WB</a>
//                     <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//                     <ul className="right hide-on-med-and-down">
//                         {gerarListaBotoes()}
//                     </ul>
//                 </div>
//             </nav>
//             <ul className="sidenav" id="mobile-menu">
//                 {gerarListaBotoes()}
//             </ul>
//         </>
//     )
// }