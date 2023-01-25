import { carregarProdutosHome } from "./modulos/carregar-exibicao.js"

( ()  => {

  const adicionarControlesCRUD = () => {
    
    const produtos = document.querySelectorAll('[data-produto]');
    produtos.forEach(produto => {
      const figure = produto.querySelector('figure');

      const botaoExcluir = document.createElement('button');
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

  async function carregarProdutos(){
    carregarProdutosHome();

    await adicionarControlesCRUD();
  }

  carregarProdutos();

})();