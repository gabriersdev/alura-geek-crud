import { carregarProdutosPaginaProduto, carregarDadosProdutoPesquisado, alterarTitleConsultaProduto } from "./modulos/carregar-exibicao.js";
import { produtosExibicaoHome } from "./modulos/conteudos-produtos.js";
import { URLPaginaErro } from "./modulos/utilitarios.js";

(() => {

  const dadosGET = new URLSearchParams(window.location.search);

  let nomeCategoria;
  let idGET;

  if(dadosGET.get('categoria') !== null && dadosGET.get('id') !== null){
    nomeCategoria = dadosGET.get('categoria').toLowerCase();
    idGET = dadosGET.get('id').toLowerCase();

    let categoria = null;

    switch(nomeCategoria){
      case 'star-wars':
        categoria = produtosExibicaoHome.filter(produto => produto.categoria == 'starWars');
        break;
  
      case 'consoles':
        categoria = produtosExibicaoHome.filter(produto => produto.categoria == 'consoles');
        break;
      
      case 'diversos':
        categoria = produtosExibicaoHome.filter(produto => produto.categoria == 'diversos');
        break;
    }

    const dadosProduto = idGET !== null ? produtosExibicaoHome[idGET] : undefined;
    const ehValido = (dadosProduto !== undefined) !== null;

    if(ehValido){
      carregarProdutosPaginaProduto(categoria, nomeCategoria);
      carregarDadosProdutoPesquisado(dadosProduto);
      alterarTitleConsultaProduto(dadosProduto);
    }

    else{
      window.location.href = URLPaginaErro;
    }
    
  }
  
  else{
    window.location.href = URLPaginaErro;
  }

})();