import { tratarFormulario } from "./modulos/tratamento-formulario.js";
import { mascararCamposMonetarios } from './modulos/utilitarios.js'

(() => {

  const preco = document.querySelector('[data-input="preco"]');
  mascararCamposMonetarios(preco);

})();