
const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");


//* Configuração da paginação 

//Define quantos livros serão mostrados em cada página 
const livrosPorPagina = 4;

// Guarda qual pagina esta endo exibida , começando na pagina 1;
let paginaAtual = 1;


//* Calculando o total de paginas 

//Divide a quantidade total de livros pela quantodade de livros por pagina
//Math.ceil() = 2.5 arredondado para cima -> 3 paginas 
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

//* Função responsavel por mostrar a pagina ( atualizar os elementos)

function mostrarPagina(){

    // Descobe o primeiro indice do primeiro livro que deve aparecer 

    //pagina 1
    // (1 -1 ) * 4 = 0 

    //pagina 2
    // (2 - 1) * 4 = 4

    //Livros  = [1, 2, 3, 4, 5, 6, 7, 8]
    //pagina 1 = 1, 2, 3, 4
    //pagina 2 = 5, 6, 7, 8 
    const inicio = (paginaAtual - 1) * livrosPorPagina;

    //pagina 1 : inicio = 0 -> fim = 0 + 4 = 4
    //pagina 2 : inicio 4  -> fim = 4 + 4 = 8 
    const fim = inicio + livrosPorPagina;

    //percorre toda lista de livros encontrados no html
    // *livro* representa o elemento atual 
    // *posicao* representa a posicao desse livro na lista 

    livros.forEach((livro , posicao) => {

        //inicio da pagina 1 = 0 
        // fim = 4

        if(posicao >= inicio && posicao < fim) {
            //se estiver dentro do intervalo , mostra o livro 

            livro.style.display = "grid"
        }
        else {
            // se não estiver, esconde o livro
             livro.style.display = "none"
        }

    })

    //atualiza no HTML o numero da pagina atual
    numeroPagina.textContent = paginaAtual

    //inicalmente consideramos o "fim" como a posição do ultimo livro mostrado
    let ultimoLivro = fim;

    //Se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if(ultimoLivro > livros.length)
    {
        ultimoLivro =livros.length

    }  

    let livrosMostrados = ultimoLivro - inicio;

        quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`
};

//Evento de click no botão de proxima pagina 

botaoProxima.addEventListener("click", () => {

    //Só permite avançar se existe uma proxima pagina
    if(paginaAtual < totalPaginas) {

        //paginaAtual = paginaAtual + 1
        paginaAtual++;

        mostrarPagina();
    }
})

//Evento de click na pagina anterior

botaoAnterior.addEventListener("click", () => {

    if(paginaAtual > 1){
    //voltamos uma pagina
    paginaAtual--;

    //Atualiza em livros exibidos na tela
    mostrarPagina();
    }
})

mostrarPagina()


// quando a pagina carregar . precisamos executar a função de mostrar pagina uma vez para
//  esconder os livros que não pertencem a primeira pagina