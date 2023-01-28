import { api } from './api/api.js';
import { retornarDadosProduto, carregarDadosPaginaEdicao } from './modulos/carregar-exibicao.js';
import { mascararCamposMonetarios, redirecionarPaginaErro, isEmpty, exibirModalFeedback } from './modulos/utilitarios.js'

(async () => {
  
  const preco = document.querySelector('[data-input="preco"]');
  mascararCamposMonetarios(preco);
  
  const dadosGET = new URLSearchParams(window.location.search);
  const id = dadosGET.get('id');

  if(isEmpty(id)){
    
    const dados = await retornarDadosProduto(dadosGET.get('id'));
    
    if(dados !== false){
      carregarDadosPaginaEdicao(dados);
      
      const formulario = document.querySelector('.formulario');
      const inputs = formulario.querySelectorAll('[data-input]');
      let valores = new Array();
      
      let tudoValido = false;
      
      formulario.addEventListener('keyup', (evento) => {
        valores = new Array();
        
        inputs.forEach(input => {
          tudoValido = input.validity.valid;
          valores.push(input.value);
        })
        
        evento.preventDefault();
      })
      
      formulario.querySelector('button[type=submit]').addEventListener('click', (evento) => {

        evento.preventDefault();

        if(tudoValido){
          
          const dados = {
            'URLProduto': valores[0],
            'categoria': valores[1],
            'nome': valores[2],
            'valor': valores[3],
            'descricao': valores[4],
          }

          if(api.atualizarProduto(dados, id)){
            exibirModalFeedback('sucesso', 'Produto atualizado!', './todos-produtos.html');
          }else{
            exibirModalFeedback('erro', 'Ocorreu um erro', null);
          }
        }
      })
      
    }else{
      redirecionarPaginaErro();
    }
    
  }else{
    redirecionarPaginaErro();
  }
  
})();