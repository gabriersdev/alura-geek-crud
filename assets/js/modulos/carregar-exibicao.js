import { produtosExibicaoHome } from "./conteudos-produtos.js";
import { criarCardProdutosExibicaoHome, criarSecaoProdutos } from './criar-elementos-exibicao.js'
import { converterValor } from "./utilitarios.js";

const carregarProdutosHome = () => {
  criarSecaoProdutos('Star Wars', carregar(produtosExibicaoHome.filter(produto => produto.categoria == 'starWars'), 'Star Wars'));
  criarSecaoProdutos('Consoles', carregar(produtosExibicaoHome.filter(produto => produto.categoria == 'consoles'), 'Consoles'));
  criarSecaoProdutos('Diversos', carregar(produtosExibicaoHome.filter(produto => produto.categoria == 'diversos'), 'Diversos'));
}

const carregarProdutosPaginaProduto = (categoria, nomeCategoria) => {
  criarSecaoProdutos('Produtos similiares', carregar(categoria, nomeCategoria));
}

const carregarDadosProdutoPesquisado = (dadosProduto) => {
  const secao = document.querySelector('[data-dados-produto]');
  secao.querySelector('img').src = `./${dadosProduto.imagem}`;
  secao.querySelector('h1').textContent = dadosProduto.nomeProduto;
  secao.querySelector('span').textContent = converterValor(dadosProduto.valor);
  secao.querySelector('p').textContent = dadosProduto.descricao;
}

const carregarDadosPaginaEdicao = (dados) => {
  const formulario = document.querySelector('.formulario');

  formulario.querySelector(`[data-input="URL"]`).value = `${dados.imagem}`;
  formulario.querySelector(`[data-input="categoria"]`).value = dados.categoria;
  formulario.querySelector(`[data-input="nome-produto"]`).value = dados.nomeProduto;
  formulario.querySelector(`[data-input="preco"]`).value = converterValor(dados.valor);
  formulario.querySelector(`[data-input="descricao"]`).value = dados.descricao;
}

const retornarDadosProduto = (id) => {
  const produto = produtosExibicaoHome[id];

  if(produto == null){
    return false;
  }
  
  return produto;
}

const alterarTitleConsultaProduto = (dadosProduto) => {
  document.title = `${dadosProduto.nomeProduto} - Alura Geek`; 
}

const carregar = (categoria, nome) => {
  const produtosCategoria = Array();
  categoria.forEach((produto) => {
    const categoriaURL = (nome.toLowerCase()).replaceAll(' ','-');
    const URLproduto = {categoriaURL};
    produtosCategoria.push(criarCardProdutosExibicaoHome(produto, URLproduto));
  })
  return produtosCategoria;
}

export{
  carregarProdutosHome,
  carregarProdutosPaginaProduto,
  carregarDadosProdutoPesquisado,
  carregarDadosPaginaEdicao,
  alterarTitleConsultaProduto,
  retornarDadosProduto
}