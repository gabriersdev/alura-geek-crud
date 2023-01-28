import { carregarTodosProdutos, retornarDadosProduto } from "./modulos/carregar-exibicao.js"
import { controleFechamentoModal, verificarIDProduto } from "./modulos/utilitarios.js";

( ()  => {

  const adicionarControlesCRUD = () => {
    const produtos = document.querySelectorAll('[data-produto]');
    produtos.forEach(produto => {
      const figure = produto.querySelector('figure');

      const botaoExcluir = document.createElement('a');
      botaoExcluir.href = '#';
      botaoExcluir.innerHTML = '<i class="bi bi-trash"></i>';
      botaoExcluir.classList.value = 'controle__crud__btn-exclui';
      botaoExcluir.dataset.botaoExcluirProduto = `${produto.dataset.produto}`;

      const linkEditar = document.createElement('a');
      linkEditar.innerHTML = '<i class="bi bi-pencil-square"></i>';
      linkEditar.classList.value = 'controle__crud__btn-edita';
      linkEditar.href = `./editar-produto.html?id=${produto.dataset.produto}`;

      const div = document.createElement('div');
      div.classList.value = 'controle__crud';
      div.appendChild(botaoExcluir);
      div.appendChild(linkEditar);
      
      figure.appendChild(div);
    })
  }

  const acoesControlesCRUD = () => {
    const botoesExclui = document.querySelectorAll('[data-botao-excluir-produto]');
    botoesExclui.forEach(botao => {
      botao.addEventListener('click', (evento) => {
        console.log('clicou');
        const produto = (botao.closest('[data-produto]'));
        
        const id = botao.dataset.botaoExcluirProduto;
        verificarIDProduto(id) ? exibirModalConfirmacaoExclusao(id, produto) : console.log('O ID informado não é válido!');

        evento.preventDefault();
      })
    });
  }

  const controleConfirmacaoExclusao = (modal, produto) => {
    const btnConfirma = modal.querySelector('[data-modal-confirmacao]');
    btnConfirma.addEventListener('click', () => {
      produto.remove();
      modal.close();
    })
  }

  const exibirModalConfirmacaoExclusao = (id, produto) => {
    const modal = document.querySelector('[data-modal-exclui-produto]');
    modal.showModal();

    const dados = retornarDadosProduto(id);
    modal.querySelector('[data-input-dados-produto="nome"]').textContent = dados.nomeProduto;
    modal.querySelector('[data-input-dados-produto="categoria"]').textContent = dados.categoria;

    controleFechamentoModal(modal);
    controleConfirmacaoExclusao(modal, produto)
  }

  const carregarProdutos = async () => {
    await carregarTodosProdutos();
    await adicionarControlesCRUD();
    await acoesControlesCRUD();
  }

  carregarProdutos();

})();