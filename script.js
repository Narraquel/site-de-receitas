// Pega o select
const categorias = document.getElementById("categorias");

// Pega todas as receitas
const receitas = document.querySelectorAll(".receita");

// Quando mudar a categoria
categorias.addEventListener("change", function () {

    // Descobre qual categoria foi escolhida
    const categoriaEscolhida = categorias.value;

    // Percorre todas as receitas
    receitas.forEach(function(receita) {

        // Se escolheu "Geral", mostra todas
        if (categoriaEscolhida === "geral") {
            receita.style.display = block;  
        } 
         // Se a receita pertence à categoria escolhida
        else if (receita.classList.contains(categoriaEscolhida)){
            receita.style.display = "block";
        }
         // Caso contrário, esconde
        else {
            receita.style.display = "none";
        }

    });

});

// Pega todos os botões com a classe "abrir"
const botoes =  document.querySelectorAll(".abrir");

// Percorre todos os botões encontrados
botoes.forEach(function (botao){

    // Espera o usuário clicar no botão
    botao.addEventListener("click", function() {

        // Pega a div "conteudo" da receita correspondente
        const conteudo = botao.parentElement.nextElementSibling;

        // Verifica se o conteúdo já está aparecendo
        if(conteudo.style.display === "block"){

            // Esconde o conteúdo
            conteudo.style.display = "none";

            // Muda a seta para baixo
            botao.textContent = "▼";
        }

        // Caso o conteúdo esteja escondido
        else {

            // Mostra o conteúdo
            conteudo.style.display = "block";

            // Muda a seta para cima
            botao.textContent = "▲";
        }
    });
});