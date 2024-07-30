const prompt = require('prompt-sync')();

const { criar, atualizar, remover, listar } = require ("./usuarios.js")

while (true) {
    console.log(`
    1. Para Inserir Novo Usuário
    2. Para Listar os Usuários Cadastrados
    3. Para atualizar as informações de um usuário
    4. para remover um usuario
    5. para sair do sistema
    `)

    const opcao = prompt()

    switch (opcao) {
        case "1":
            criar()
            break;
            case "2":
            listar()
            break;
            case "3":
            atualizar()
            break;
            case "4":
            remover()
            break;
            case "5":
            process.exit()
            break;
    
        default:
            console.log("Opção Inválida")
            break;
    }
}