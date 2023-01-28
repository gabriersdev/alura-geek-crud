import { api } from './api/api.js';
import { exibirModalFeedback, mascararCamposMonetarios } from './modulos/utilitarios.js'

(() => {

  const preco = document.querySelector('[data-input="preco"]');
  mascararCamposMonetarios(preco);

  const formulario = document.querySelector('.formulario');
  const inputs = formulario.querySelectorAll('[data-input]');
  let valores = new Array();

  let tudoValido = false;

  formulario.addEventListener('keyup', (evento) => {
    valores = new Array();

    inputs.forEach(input => {
      tudoValido = input.validity.valid;
      valores.push(input.value);
    })

    evento.preventDefault();
  })

  formulario.querySelector('button[type=submit]').addEventListener('click', (evento) => {

    evento.preventDefault();

    if(tudoValido){

      const dados = {
        'URLProduto': valores[0],
        'categoria': valores[1],
        'nome': valores[2],
        'valor': valores[3],
        'descricao': valores[4],
      }

      if(api.criarProduto(dados)){
        exibirModalFeedback('sucesso', 'Tudo certo!', './todos-produtos.html');
      }else{
        exibirModalFeedback('erro', 'Ocorreu um erro', null);
        window.location.reload();
      }
    }
  })

})();