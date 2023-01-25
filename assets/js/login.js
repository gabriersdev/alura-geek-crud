import { tratarFormulario } from "./modulos/tratamento-formulario.js";

(() => {
  
  const btnControleSenha = document.querySelector('[data-formulario-senha]');
  btnControleSenha.addEventListener('click', (evento) => {
    const input = btnControleSenha.parentElement.querySelector('input');
    
    if(input.type == 'password'){
      input.type = 'text';
      btnControleSenha.querySelector('i').setAttribute('class', 'bi bi-eye-slash-fill');
    }else{
      input.type = 'password';
      btnControleSenha.querySelector('i').setAttribute('class', 'bi bi-eye-fill');
    }

    input.focus();
    evento.preventDefault();
  })

})();