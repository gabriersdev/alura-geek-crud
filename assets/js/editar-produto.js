import { retornarDadosProduto, carregarDadosPaginaEdicao } from './modulos/carregar-exibicao.js';
import { mascararCamposMonetarios, redirecionarPaginaErro, isEmpty } from './modulos/utilitarios.js'

(() => {

  const preco = document.querySelector('[data-input="preco"]');
  mascararCamposMonetarios(preco);

  const dadosGET = new URLSearchParams(window.location.search);

  if(isEmpty(dadosGET.get('id'))){

    const dados = retornarDadosProduto(dadosGET.get('id'));

    if(dados !== false){
      carregarDadosPaginaEdicao(dados);
    }else{
      redirecionarPaginaErro();
    }

  }else{
    redirecionarPaginaErro();
  }

})();