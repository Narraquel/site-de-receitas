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