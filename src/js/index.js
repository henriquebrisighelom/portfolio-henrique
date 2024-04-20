/*
    Objetivo 1 - quando o usuário clicar no botão de : "Mostrar mais", os projetos escondidos do html devem abrir

*   Passo 1 - Pegar o botao : "Mostrar Mais" no js, para verificar quando usuário clicar nele.

* Passo 2 - Identificar o clique no botão.

* Passo 3 - Adicionar a classe "ativo" nos projetos escondidos.

    Objetivo 2 - Esconder o botão de : "Mostrar mais":
* Passo 1 - Pegar o botão e esconder ele.
*/

/*
Acessando o objeto */

/*  Passo 1 - Pegar o botao : "Mostrar Mais" no js, para verificar quando usuário clicar nele.
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

/* colocando o método de escuta no botão, e identificando o clique no botão*/

botaoMostrarProjetos.addEventListener('click',() => {

 
  //chamando funções
    mostrarMaisProjetos();
    
    esconderBotao();

});

// Esconder o botão de "Mostrar-Mais"
    //Pegar o botão e esconder ele
function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}
/*Adicionar a classe : "ATIVO", nos projetos escondidos*/
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

