// ===================================================
// FILTRO POR CATEGORIA (usado na página de listagem)
// ===================================================
const categorias = document.getElementById("categorias");
const receitas = document.querySelectorAll(".receita");

if (categorias) {
  categorias.addEventListener("change", function () {
    const categoriaEscolhida = categorias.value;

    receitas.forEach(function (receita) {
      if (categoriaEscolhida === "geral") {
        receita.style.display = "block";
      } else if (receita.classList.contains(categoriaEscolhida)) {
        receita.style.display = "block";
      } else {
        receita.style.display = "none";
      }
    });
  });
}

// ===================================================
// ABRIR/FECHAR CONTEÚDO DA RECEITA (acordeão)
// ===================================================
const botoesAbrir = document.querySelectorAll(".abrir");

botoesAbrir.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const conteudo = botao.parentElement.nextElementSibling;

    if (getComputedStyle(conteudo).display === "none") {
      conteudo.style.display = "block";
      botao.textContent = "▲";
    } else {
      conteudo.style.display = "none";
      botao.textContent = "▼";
    }
  });
});

// ===================================================
// BARRA DE PESQUISA
// ===================================================
const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {
  pesquisa.addEventListener("input", function () {
    const texto = pesquisa.value.toLowerCase();

    receitas.forEach(function (receita) {
      const nome = receita.querySelector("h2").textContent.toLowerCase();
      receita.style.display = nome.includes(texto) ? "block" : "none";
    });
  });
}

// ===================================================
// ADICIONAR INGREDIENTE (formulário de nova receita)
// ===================================================
const campoIngrediente = document.getElementById("novoingrediente");
const botaoAdicionarIngrediente = document.getElementById("adicionaringrediente");
const listaIngredientes = document.getElementById("listaingrediente");

if (botaoAdicionarIngrediente) {
  botaoAdicionarIngrediente.addEventListener("click", function () {
    const texto = campoIngrediente.value.trim();
    if (texto === "") return;

    const linha = document.createElement("div");
    linha.className = "ingrediente";

    const item = document.createElement("p");
    item.textContent = texto;

    const remover = document.createElement("button");
    remover.type = "button";
    remover.className = "remover";
    remover.textContent = "🗑️";
    remover.addEventListener("click", function () {
      linha.remove();
    });

    linha.appendChild(item);
    linha.appendChild(remover);
    listaIngredientes.appendChild(linha);

    campoIngrediente.value = "";
    campoIngrediente.focus();
  });
}

// ===================================================
// ADICIONAR PASSO (formulário de nova receita)
// ===================================================
const campoPasso = document.getElementById("novopasso");
const botaoAdicionarPasso = document.getElementById("adicionarpasso");
const listaPassos = document.getElementById("listapassos");
let numeroPasso = 1;

if (botaoAdicionarPasso) {
  botaoAdicionarPasso.addEventListener("click", function () {
    const texto = campoPasso.value.trim();
    if (texto === "") return;

    const linha = document.createElement("div");
    linha.className = "passo";

    const item = document.createElement("p");
    item.textContent = `Passo ${numeroPasso}: ${texto}`;

    const remover = document.createElement("button");
    remover.type = "button";
    remover.className = "remover";
    remover.textContent = "🗑️";
    remover.addEventListener("click", function () {
      linha.remove();
    });

    linha.appendChild(item);
    linha.appendChild(remover);
    listaPassos.appendChild(linha);

    numeroPasso++;
    campoPasso.value = "";
    campoPasso.focus();
  });
}
