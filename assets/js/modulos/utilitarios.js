import { api } from "../api/api.js";

const converterParaMesBRL = (numero) => {
  let mes = null;

  switch (numero + 1){
    case 1: mes = 'janeiro'; break;
    case 2: mes = 'fevereiro'; break;
    case 3: mes = 'março'; break;
    case 4: mes = 'abril'; break;
    case 5: mes = 'maio'; break;
    case 6: mes = 'junho'; break;
    case 7: mes = 'julho'; break;
    case 8: mes = 'agosto'; break;
    case 9: mes = 'setembro'; break;
    case 10: mes = 'outubro'; break;
    case 11: mes = 'novembro'; break;
    case 12: mes = 'dezembro'; break;
    default: mes = 'janeiro'; break;
  }

  return mes;
}

const converterValor = (valor) => {
  return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

const controleFechamentoModal = (modal) => {
  const btnFecha = modal.querySelector('[data-modal-fecha]');
  btnFecha.addEventListener('click', () => {
    modal.close();
  })
}

const controlarModal = () => {
  const botaoModal = document.querySelectorAll('[data-direito-autorais]');
  botaoModal.forEach(botao => {
    botao.addEventListener('click', (evento) => {
      const modal = document.querySelector('[data-modal]');
      modal.showModal();
      
      controleFechamentoModal(modal);
    })
  });
}

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

const isEmpty = (valor) => {
  return valor !== undefined && valor !== null;
}

const lengthZero = (string) => {
  return string.length > 0;
}

const verificarIDProduto = async (id) => {
  const produto = await api.pesquisarProduto(id);
  return isEmpty(produto);
}

const mascararCamposMonetarios = (campo) => {
  SimpleMaskMoney.setMask(campo, {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
  });
}

const redirecionarPaginaErro = () => {
  const URLPaginaErro = './erro.html';

  window.location.href = URLPaginaErro;
}

export{
  converterParaMesBRL,
  controleFechamentoModal,
  controlarModal,
  converterValor,
  exibirModalFeedback,
  redirecionarPaginaErro,
  isEmpty,
  lengthZero,
  mascararCamposMonetarios,
  verificarIDProduto
}