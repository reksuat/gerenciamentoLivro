const prompt = require("prompt-sync")();

module.exports = {
    criar,
    listar,
    remover,
    atualizar,
    procurar
}

let livros = []

let contarId = 1;

function getIndice(id) {
    const indice = livros.findIndex((livro)=> livro.id == id);
    if (indice == -1) {
        console.log("ID inexistente.");
    }
    return indice
}
function modelo(id= contarId++) {
    const title = prompt("Nome do livro: ");
    const author = prompt("Nome do autor: ");
    const year = +prompt("Ano do livro: ");
    const genre = prompt("Genero do livro: ");
    const yearNewVersions = []

    let yearnew 
        while (true) {
            yearnew = +prompt("Ano de novas versões: (ou '' para encerrar);");
            if (yearnew =="") {
                break;
            }else{
                yearNewVersions.push(yearnew);
            }
        }

    if (title != "" && author!= "" && genre!= "") {
        return{
            id,
            title,
            author,
            year,
            genre,
            yearNewVersions
        }
    }
}
function criar() {
    const livro = modelo()
    livros.push(livro)
}

function listar() {
    if (livros.length>0) {
        livros.forEach((livro) => {
            console.log(`
            ${livro.id}
            Título: ${livro.title}
            Autor: ${livro.author}
            Ano: ${livro.year}
            Genero: ${livro.genre}
            Ano de versões: ${livro.yearNewVersions} 
            `);
        });
    }else{
        console.log("Não tem nenhum livro. ");
    }
}
function remover() {
    const id = prompt('Digite o ID do livro para deletar: ');
    livros = livros.filter(livro => livro.id !== parseInt(id));
    console.log('Livro deletado com sucesso!');
}
function atualizar() {
    if (livros.length>0) {
        const id = +prompt("Digite o ID: ");
        if(id < livros.length && id > 0){
        const indice = getIndice(id);
        
    if (indice != -1) {
        const novo = modelo(id);

    if (novo) {
        livros[indice] = novo;
        console.log("Atualizado com sucesso");
    }
    }
    }
    }}
    function procurar(params) {
        
    }
