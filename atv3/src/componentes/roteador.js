import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./produtos";
import ListaServicos from "./servicos";

const Roteador: React.FC = () => {
  const [tela, setTela] = useState<string>('Clientes');

  const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  let barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="purple lighten-4"
      botoes={['Clientes', 'Cadastros', 'servicos', 'produtos']}
    />
  );

  return (
    <>
      {barraNavegacao}
      {tela === 'Clientes' && <ListaCliente tema="purple lighten-4" />}
      {tela === 'servicos' && <ListaServicos tema="purple lighten-4" />}
      {tela === 'produtos' && <ListaProdutos tema="purple lighten-4" />}
      {tela !== 'Clientes' && tela !== 'servicos' && tela !== 'produtos' && (
        <FormularioCadastroCliente tema="purple lighten-4" />
      )}
    </>
  );
};

export default Roteador;


// import { useState } from "react";
// import BarraNavegacao from "./barraNavegacao";
// import FormularioCadastroCliente from "./formularioCadastroCliente";
// import ListaClientes from "./listaClientes";

// export default function Roteador() {
//     const [tela, setTela] = useState('Clientes')

//     const seletorView = (valor, e) => {
//         e.preventDefault()
//         setTela(valor)
//     }

//     const construirView = () => {

//         if (tela === 'Clientes') {
//             return (
//                 <>
//                     <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros']} />
//                     <ListaClientes tema="purple lighten-4" />
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros']} />
//                     <FormularioCadastroCliente tema="purple lighten-4" />
//                 </>
//             )
//         }
//     }

//     return (
//         construirView()
//     )
// }