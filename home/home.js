
const menu = document.getElementById("menu"); // pegando o elemento pelo ID

// estamos pegando o elemento de forma genérica - pode ser classe (precisa trazer o ponto) ou pode ser ID (precisa trazer a hashtag)
const navMenu = document.querySelector(".navegacao");

menu.addEventListener("click", function() {

    if(navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }
    else {
        navMenu.className = "navegacao";
    }
})

// opção com arrow function -> função lambda
// menu.addEventListener("click", () => {})