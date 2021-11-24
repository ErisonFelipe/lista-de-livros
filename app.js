const books = require('./database');
const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro? S/N: ');

if(entradaInicial.toLocaleUpperCase() === "S"){
    console.log("Essas são as categorias disponíveis: ");
    console.log("Produtividade e estilo de vida", "NEGOCIOS & ECONOMIA", "Tecnologia");

    const entradaCategoria = readline.question("Qual categoria voce escolhe? ");

    const retorno = books.filter(books => books.category === entradaCategoria);

    console.table(retorno);
} else {
    const booksOrdenados = books.sort((a,b)=>{a.pages - b.pages})
    console.log("Esses são todos os livros disoniveis: ");
    console.table(booksOrdenados);
}