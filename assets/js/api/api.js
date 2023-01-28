
const listarProdutos = () => {
  return fetch('http://localhost:3000/produtos')
  .then((response) => {
    return response.json();
  })

  .catch(erro => {
    console.log(`Erro ${erro}`);
    return false;
  })
}

const pesquisarProduto = (id) => {
  return fetch(`http://localhost:3000/produtos?id=${id}`)
  .then((response) => {
    return response.json();
  })

  .catch(erro => {
    console.log(`Erro ${erro}`);
    return false;
  })
}

const criarProduto = ({URLProduto, categoria, nome, valor, descricao}) => {
  return fetch('http://localhost:3000/produtos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      imagem: URLProduto,
      nomeProduto: nome,
      valor: valor,
      descricao: descricao,
      categoria: categoria
    })
  })

  .then(response => {
    return true;
  })

  .catch(erro => {
    console.log(`Erro ${erro}`);
    return false;
  })
}

const excluirProduto = (id) => {
  return fetch(`http://localhost:3000/produtos/${id}`, {
    method: 'DELETE'
  })

  .then(response => {
    return true;
  })

  .catch(erro => {
    console.log(`Erro ${erro}`);
    return false;
  })
}

export const api = {
  listarProdutos,
  pesquisarProduto,
  criarProduto,
  excluirProduto
}
