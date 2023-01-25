const tratarFormulario = () => {
  const inputs = document.querySelectorAll('[data-input]');
  inputs.forEach(input => {
    
    const campoFeedback = input.parentElement.querySelector('span') || input.parentElement.parentElement.querySelector('span');

    input.addEventListener('keyup', (evento) => {
      const valido = evento.target.validity.valid; //Se tudo está válido
      const requerido = evento.target.validity.valueMissing; //Verifica se há required e se não está preenchido
      const tipo = evento.target.validity.typeMismatch; //O valor correponde ao tipo
      
      if(tipo){
        campoFeedback.classList.toggle('none');
        campoFeedback.textContent = `${input.getAttribute('placeholder')} está inválido`;
      }

      if(requerido){
        campoFeedback.classList.toggle('none');
        campoFeedback.textContent = 'Preenchimento necessário';
      }

    })
  });
}

const confirmacaoFormulario = () => {
  window.onbeforeunload = (evento) => {
    const inputs = document.querySelectorAll('[data-input]');
    
    inputs.forEach(input => {
      if(input.value != ''){
        evento.returnValue = 'Tem certeza que deseja sair do site?';
      }
    })
  }
}

export{
  tratarFormulario,
  confirmacaoFormulario
}