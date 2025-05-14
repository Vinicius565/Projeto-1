const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    console.log(botao, indice);
    botao.addEventListener("click", () =>{
        const botaoSelecioannado = document.querySelector(".botao.selecionado");
        botaoSelecioannado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");

    })
})

