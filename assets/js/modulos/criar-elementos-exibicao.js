import { converterValor } from './utilitarios.js';

const criarCardProdutosExibicaoHome = (dados, {categoriaURL, index}) => {

  const URL = `./produto.html?categoria=${categoriaURL}&id=${index}`;

  const link = document.createElement('a');
  link.dataset.produto = '';
  link.href = URL;

  const itemLista = document.createElement('li');
  itemLista.classList.add('lista__item');

  const figure = document.createElement('figure');
  figure.classList.add('lista__item__figura');

  const img = document.createElement('img');
  img.classList.add('lista__item__figura__imagem');
  img.setAttribute('alt', dados.nomeProduto);
  img.setAttribute('src', `./assets/img/produtos/${dados.imagem}`);

  const figurecaption = document.createElement('figurecaption');
  figurecaption.classList.add('lista__item__figura__descricao');

  const h5 = document.createElement('h5');
  h5.textContent = dados.nomeProduto;

  const span = document.createElement('span');
  span.textContent = converterValor(dados.valor);

  figurecaption.appendChild(h5);
  figurecaption.appendChild(span);

  const linkBotao = document.createElement('a');
  linkBotao.href = URL;
  linkBotao.classList.add('lista__item__figura__botao');
  linkBotao.textContent = 'Ver produto';

  figure.appendChild(img);
  figure.appendChild(figurecaption);
  figure.appendChild(linkBotao);

  itemLista.appendChild(figure);
  link.appendChild(itemLista)

  return link;
}

const criarCardProdutosPaginaTodosProdutos = (dados, {categoriaURL, index}) => {
  return criarCardProdutosExibicaoHome(dados, categoriaURL, index);
}

const criarSecaoProdutos = (nomeSecao, cards) => {
  
  const secao = document.createElement('section');
  secao.classList.add('produtos');

  const cabecalhoProdutos = document.createElement('div');
  cabecalhoProdutos.classList.add('produtos__cabecalho');

  const titulo = document.createElement('h3');
  titulo.classList.add('produtos__cabecalho__titulo');
  titulo.textContent = nomeSecao;

  const linkBotao = document.createElement('a');
  linkBotao.href = './todos-produtos.html';
  linkBotao.classList.add('produtos__cabecalho__botao');
  linkBotao.innerHTML += `Ver tudo <i class="bi bi-arrow-right"></i>`;
  
  cabecalhoProdutos.appendChild(titulo);
  cabecalhoProdutos.appendChild(linkBotao);


  const listaProdutos = document.createElement('div');
  listaProdutos.classList.add('lista__produtos');
  
  const lista = document.createElement('ul');
  lista.classList.add('lista');

  cards.forEach(card => {
    lista.appendChild(card);
  })

  listaProdutos.appendChild(lista);


  secao.appendChild(cabecalhoProdutos);
  secao.appendChild(listaProdutos);

  const main = document.querySelector('.conteudo');
  main.appendChild(secao);
}

export{
  criarCardProdutosExibicaoHome,
  criarSecaoProdutos
}