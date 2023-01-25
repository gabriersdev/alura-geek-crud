import { produtosExibicaoHome } from "./conteudos-produtos.js";
import { criarCardProdutosExibicaoHome, criarSecaoProdutos } from './criar-elementos-exibicao.js'
import { converterValor } from "./utilitarios.js";

const carregarProdutosHome = () => {

  criarSecaoProdutos('Star Wars', carregar(produtosExibicaoHome.starWars, 'Star Wars'));
  criarSecaoProdutos('Consoles', carregar(produtosExibicaoHome.consoles, 'Consoles'));
  criarSecaoProdutos('Diversos', carregar(produtosExibicaoHome.diversos, 'Diversos'));
}

const carregarProdutosPaginaProduto = (categoria, nomeCategoria) => {
  criarSecaoProdutos('Produtos similiares', carregar(categoria, nomeCategoria));
}

const carregarDadosProdutoPesquisado = (dadosProduto) => {
  const secao = document.querySelector('[data-dados-produto]');
  secao.querySelector('img').src = `./assets/img/produtos/${dadosProduto.imagem}`;
  secao.querySelector('h1').textContent = dadosProduto.nomeProduto;
  secao.querySelector('span').textContent = converterValor(dadosProduto.valor);
  secao.querySelector('p').textContent = dadosProduto.descricao;
}

const alterarTitleConsultaProduto = (dadosProduto) => {
  document.title = `${dadosProduto.nomeProduto} - Alura Geek`; 
}

const carregar = (categoria, nome) => {
  const produtosCategoria = Array();
  categoria.forEach((produto, index) => {
    const categoriaURL = (nome.toLowerCase()).replaceAll(' ','-');
    const URLproduto = {categoriaURL, index};
    produtosCategoria.push(criarCardProdutosExibicaoHome(produto, URLproduto));
  })
  return produtosCategoria;
}

export{
  carregarProdutosHome,
  carregarProdutosPaginaProduto,
  carregarDadosProdutoPesquisado,
  alterarTitleConsultaProduto
}