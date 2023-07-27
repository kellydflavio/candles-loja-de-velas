const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {


    
        desativarBotaoSelecionado();

      
        marcarBotaoComoSelecionao(botao);

      
        esconderImagemAtiva();

      
        mostrarimagemAtiva(indice);


    })
})


function mostrarimagemAtiva(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function marcarBotaoComoSelecionao(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

