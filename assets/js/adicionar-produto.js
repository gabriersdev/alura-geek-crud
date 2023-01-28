import { api } from './api/api.js';
import { controleFechamentoModal, mascararCamposMonetarios } from './modulos/utilitarios.js'

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
  })

  formulario.querySelector('button[type=submit]').addEventListener('click', () => {
    if(tudoValido){

      const dados = {
        'URLProduto': valores[0],
        'categoria': valores[1],
        'nome': valores[2],
        'valor': valores[3],
        'descricao': valores[4],
      }

      console.log(dados);

      if(api.criarProduto(dados)){
        console.log('Mandou');
        exibirModalFeedback('sucesso', 'Tudo certo!');
        window.location.replace('./todos-produtos.html');
      }else{
        console.log('Não mandou');
        exibirModalFeedback('erro', 'Ocorreu um erro');
        window.location.reload();
      }
    }
  })

  const exibirModalFeedback = (condicao, titulo) => {
    const importacao = document.querySelector('[data-importacoes-html]');
    let icone = '';

    condicao = condicao.toLowerCase();
    if(condicao == 'sucesso'){
      icone = `<i class="bi bi-check-circle-fill feedback sucesso"></i>`;
    }else{
      icone = `<i class="bi bi-x-circle feedback erro"></i>`;
    }

    importacao.innerHTML += `<dialog class="modal" data-modal-feedback><div class="modal-feedback scale-in-center">${icone}<h1>${titulo}</h1></div></dialog>`;

    const modal = document.querySelector('[data-modal-feedback]');
    modal.showModal();
  }

})();