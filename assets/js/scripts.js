import { converterParaMesBRL, controlarModal } from "./modulos/utilitarios.js";
import { tratarFormulario, confirmacaoFormulario } from "./modulos/tratamento-formulario.js";
import { api } from "./api/api.js";

(() => 
{

  window.addEventListener("load", () => {
    const dataAtual = new Date();

    const areasAnoAtual = document.querySelectorAll("[data-ano-atual]");
    areasAnoAtual.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })

    const areasMesAtual = document.querySelectorAll('[data-mes-atual]');
    areasMesAtual.forEach(area => {
      area.textContent = `${converterParaMesBRL(dataAtual.getUTCMonth())}`;
    })

    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
      logo.addEventListener('click', () => {
        window.location.href = './index.html';
      })
    })

    const overlay = document.querySelector('.overlay-2');
    overlay.style.display = 'none';
  })

  const importarConteudo = () => {
    const areaImportacao = document.querySelector('[data-importacoes-html]');
    const conteudoParaImportar = `  
    <dialog class="modal" data-modal><h3>Atribuição de Direitos Autorais</h3><br>
      <p>Para o desenvolvimento deste site foram usados recursos das seguintes bibliotecas e/ou serviços:</p>
      <ul>
        <li>Unsplash</li>
        <li>SVG Repo</li>
        <li>Animista</li>
        <li>Bootstrap Icons</li>
        <li>Symple Mask Money</li>
      </ul>
      <button data-modal-fecha class='modal__botao'>Fechar</button>
    </dialog>`;

    areaImportacao.innerHTML = conteudoParaImportar;
  }

  importarConteudo();
  controlarModal();
  tratarFormulario();
  confirmacaoFormulario();

  const renderizar = async () => {
    const produtos = await (api.listarProdutos());
    produtos.forEach(produto => {
      console.log(produto);
    } )
  }

  // renderizar();

})();




