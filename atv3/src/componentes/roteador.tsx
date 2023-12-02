import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao.tsx";
import FormularioCadastroCliente from "./formularioCadastroCliente.tsx";
import ListaCliente from "./listaClientes.tsx";
import ListaProdutos from "./produtos.tsx";
import ListaServicos from "./servicos.tsx";

export default function Roteador() {
  const [tela, setTela] = useState<string>('Clientes');

  const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  const RenderizarTela = () => {
    switch (tela) {
      case 'Clientes':
        return (
          <>
            <BarraNavegacao
            seletorView={selecionarView}
            tema="purple lighten-4"
            botoes={['Clientes', 'Cadastros', 'Servicos', 'Produtos']}/>
            <ListaCliente
            tema="purple lighten-4" />;
          </>
        );

      case 'Servicos':
        return (
          <>
          <BarraNavegacao
          seletorView={selecionarView}
          tema="purple lighten-4"
          botoes={['Clientes', 'Cadastros', 'Servicos', 'Produtos']}
          />
          <ListaServicos tema="purple lighten-4" />
          </>
        );

      case 'Produtos':
        return (
          <>
          <BarraNavegacao
          seletorView={selecionarView}
          tema="purple lighten-4"
          botoes={['Clientes', 'Cadastros', 'Servicos', 'Produtos']}
          />
          <ListaProdutos
          tema="purple lighten-4" />;
          </>
        );

      default:
        return <FormularioCadastroCliente tema="purple lighten-4" />;
    }
  };
  return (
    RenderizarTela()
    );
};