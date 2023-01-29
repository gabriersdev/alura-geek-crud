(() => {
  const copiarCodigo = (codigo) => {
    const conteudoCodigo = codigo.textContent;
    
    try{
      navigator.clipboard.writeText(conteudoCodigo.trim());
      return true;
    }catch(erro){
      console.log(erro);
      return false;
    }
  }
  
  const acionarCopiaCodigo = (evento, botao) => {
    const pre = evento.target.closest('pre');
    const code = pre.querySelector('code');
    
    const iconeNormal = `<i class="bi bi-clipboard"></i>`
    const sucesso = `<i class="bi bi-check2"></i>`;
    const erro = `<i class="bi bi-x-lg"></i>`;
    
    if(copiarCodigo(code)){
      botao.innerHTML = '';
      botao.classList.toggle('sucesso');
      botao.innerHTML = sucesso;
    }else{
      botao.innerHTML = '';
      botao.classList.toggle('erro');
      botao.innerHTML = erro;
    }
    
    setTimeout(() => {
      botao.classList.value = 'codigo__btn-copiar';
      botao.innerHTML = iconeNormal;
    }, 2000)
  }
  
  window.addEventListener('load', function(){
    const btnCopiaCodigo = document.querySelectorAll('[data-acao-copiar-codigo]');
    btnCopiaCodigo.forEach(botao => {
      botao.addEventListener('click', (evento) => {
        acionarCopiaCodigo(evento, botao);
      });
    });
  })

})();