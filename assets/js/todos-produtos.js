import { carregarProdutosHome } from "./modulos/carregar-exibicao.js"

( ()  => {

  const adicionarControlesCRUD = () => {
    
    const produtos = document.querySelectorAll('[data-produto]');
    produtos.forEach(produto => {
      const figure = produto.querySelector('figure');

      const botaoExcluir = document.createElement('button');
      botaoExcluir.innerHTML = '<i class="bi bi-trash"></i>';
      botaoExcluir.classList.value = 'botao-exclui-produto';

      const linkEditar = document.createElement('a');
      linkEditar.innerHTML = '<i class="bi bi-pencil-square"></i>';
      linkEditar.classList.value = 'botao-edita-produto';

      console.log(linkEditar);

      figure.appendChild(botaoExcluir);
      figure.appendChild(linkEditar);
    })

  }

  async function carregarProdutos(){
    carregarProdutosHome();

    await adicionarControlesCRUD();
  }

  carregarProdutos();

})();