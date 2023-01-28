
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

export const api = {
  listarProdutos,
  pesquisarProduto
}
