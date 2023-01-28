import { api } from "../api/api.js";
import { criarCardProdutosExibicaoHome, criarSecaoProdutos } from './criar-elementos-exibicao.js'
import { converterValor } from "./utilitarios.js";

const carregarProdutosHome = async () => {

  const produtos = await (api.listarProdutos());

  criarSecaoProdutos('Star Wars', carregar(produtos.filter(produto => produto.categoria == 'starWars'), 'Star Wars'));
  criarSecaoProdutos('Consoles', carregar(produtos.filter(produto => produto.categoria == 'consoles'), 'Consoles'));
  criarSecaoProdutos('Diversos', carregar(produtos.filter(produto => produto.categoria == 'diversos'), 'Diversos'));
}

const carregarTodosProdutos = async () => {
  const produtos = new Array;

  const listaProdutos = await api.listarProdutos();

  listaProdutos.forEach(produto => {
    let categoriaURL;

    switch(produto.categoria){
      case 'starWars':
        categoriaURL = 'Star Wars';
        break;
      default:
        categoriaURL = produto.categoria;
        break;
    }
    
    categoriaURL = (categoriaURL.toLowerCase()).replaceAll(' ','-');
    const URLproduto = {categoriaURL};

    produtos.push(criarCardProdutosExibicaoHome(produto, URLproduto));
  })

  criarSecaoProdutos('', produtos);
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

const retornarDadosProduto = async (id) => {
  let produto = await api.pesquisarProduto(id);
  produto = produto[0];

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
  categoria.splice(0, 6).forEach((produto) => {
    const categoriaURL = (nome.toLowerCase()).replaceAll(' ','-');
    const URLproduto = {categoriaURL};
    produtosCategoria.push(criarCardProdutosExibicaoHome(produto, URLproduto));
  })
  return produtosCategoria;
}

export{
  carregarProdutosHome,
  carregarTodosProdutos,
  carregarProdutosPaginaProduto,
  carregarDadosProdutoPesquisado,
  carregarDadosPaginaEdicao,
  alterarTitleConsultaProduto,
  retornarDadosProduto
}