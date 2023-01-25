import { retornarDadosProdutoPesquisado } from './modulos/carregar-exibicao.js';
import { mascararCamposMonetarios, URLPaginaErro, converterValor } from './modulos/utilitarios.js'

(() => {

  const preco = document.querySelector('[data-input="preco"]');
  mascararCamposMonetarios(preco);

  const dadosGET = new URLSearchParams(window.location.search);

  if(dadosGET.get('id') !== null){

    const id = dadosGET.get('id');
    const dados = retornarDadosProdutoPesquisado(id);

    if(dados !== false){
      
      const formulario = document.querySelector('.formulario');

      formulario.querySelector(`[data-input="URL"]`).value = `${dados.imagem}`;
      formulario.querySelector(`[data-input="categoria"]`).value = dados.categoria;
      formulario.querySelector(`[data-input="nome-produto"]`).value = dados.nomeProduto;
      formulario.querySelector(`[data-input="preco"]`).value = converterValor(dados.valor);
      formulario.querySelector(`[data-input="descricao"]`).value = dados.descricao;

    }else{
      window.location.href = URLPaginaErro;
    }

  }else{
    window.location.href = URLPaginaErro;
  }

})();