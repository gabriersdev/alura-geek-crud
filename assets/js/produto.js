import { api } from "./api/api.js";
import { carregarProdutosPaginaProduto, carregarDadosProdutoPesquisado, alterarTitleConsultaProduto } from "./modulos/carregar-exibicao.js";
import { isEmpty, lengthZero, redirecionarPaginaErro, verificarIDProduto } from "./modulos/utilitarios.js";

(async () => {

  const dadosGET = new URLSearchParams(window.location.search);

  let nomeCategoria;
  let idGET;

  if(dadosGET.get('categoria') !== null && dadosGET.get('id') !== null){
    nomeCategoria = dadosGET.get('categoria').toLowerCase();
    idGET = dadosGET.get('id').toLowerCase();

    let categoria = null;
    const produtos = await api.listarProdutos();

    switch(nomeCategoria){
      case 'star-wars':
        categoria = produtos.filter(produto => produto.categoria == 'starWars');
        break;
  
      case 'consoles':
        categoria = produtos.filter(produto => produto.categoria == 'consoles');
        break;
      
      case 'diversos':
        categoria = produtos.filter(produto => produto.categoria == 'diversos');
        break;
    }

    const dadosProduto = await api.pesquisarProduto(idGET);
    const ehValido = (isEmpty(dadosProduto) && lengthZero(dadosProduto));

    if(ehValido){
      carregarProdutosPaginaProduto(categoria, nomeCategoria);
      carregarDadosProdutoPesquisado(dadosProduto[0]);
      alterarTitleConsultaProduto(dadosProduto[0]);
    }

    else{
      redirecionarPaginaErro();
    }
    
  }
  
  else{
    redirecionarPaginaErro();
  }

})();