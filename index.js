const { criar, listar, atualizar, remover, procurar } = require("./livro");

const prompt = require("prompt-sync")();
while (true) {
    console.log(`
    >>>>LIVROS<<<<
    1- Criar
    2- Listar
    3- Atualizar
    4- Remover
    5- Procurar
    0- Sair`);
    let escolha = +prompt();
    switch (escolha) {
        case 1:
            console.log(criar());
            break;
            case 2:
                console.log(listar());
                break;
                case 3:
                    console.log(atualizar());
                    break;
                    case 4:
                        console.log(remover());
                        break;
                        case 5: 
                        console.log(procurar());
                        break;
                        case 0: 
                        console.log("Saindo..");
                        process.exit();
                        break;
        default:
            console.log("Opção não existe");
            break;
    }
}