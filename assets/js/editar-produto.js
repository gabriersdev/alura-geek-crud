import { retornarDadosProdutoPesquisado } from './modulos/carregar-exibicao.js';
import { mascararCamposMonetarios, URLPaginaErro } from './modulos/utilitarios.js'

(() => {

  const preco = document.querySelector('[data-input="preco"]');
  mascararCamposMonetarios(preco);

  const dadosGET = new URLSearchParams(window.location.search);

  if(dadosGET.get('id') !== null){

    const id = dadosGET.get('id');
    const dados = retornarDadosProdutoPesquisado(id);

    if(dados !== false){
      
      console.log(dados);

    }else{
      window.location.href = URLPaginaErro;
    }

  }else{
    window.location.href = URLPaginaErro;
  }

})();