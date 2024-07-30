const prompt = require('prompt-sync')();

const usuarios = []

let ultimoId = 1;

const emailNaoDuplicado = email => {
    if (usuarios.find(usuario => usuario.email == email)){
        console.log("Email duplicado")
        return false
    }

    return true
}

const modelo = (id = ultimoId++) => {

    // Primeira Parte do Modelo = Leitura dos Dados
    const nomeUsuario = prompt("Nome do Usuário: ");
    const emailUsuario = prompt("E-Mail do Usuário: ");
    const telefonesUsuario = []
    while (true) {
        const telefoneUsuario = prompt ("Digite um número de telefone do usuário, ou 0 para sair:")
        if (telefoneUsuario == 0) {
            break
        } else{
            telefonesUsuario.push(telefoneUsuario)
        }
    };

    // Segunda Parte do Modelo é a validação dos dados
    if (emailNaoDuplicado(emailUsuario)){
    // Terceira Parte do Modelo é o Retorno
        return {
            nomeUsuario,
            emailUsuario,
            telefonesUsuario,
            id,
        };
    }

        console.log("Falha em realizar a operação.")
};
       



const criar = () => {
    const usuario = modelo();

    if (usuario != undefined){
        usuarios.push(usuario);
        console.log("Usuário Cadastrado com Sucesso!")
    }
};

const listar = () => {   // TODO corrigir o código que está com erro
    if (usuarios.length == 0){
        console.log("Nenhum Usuário Encontrado!")
        return false;
    } else {
        usuarios.forEach((usuario) => {
            console.log(`
           ID: ${usuario.id}
            Nome: ${usuario.nomeUsuario}, e-mail: ${usuario.emailUsuario},
            `);
            usuarios.telefonesUsuario.forEach(telefonesUsuario, indice => {
                console.log(`Telefone ${indice + 1}: ${telefoneUsuario}`)
            })
        });
        return true
    }
}

const atualizar = () => {
    if (listar()){
        const id = prompt("Qual ID do usuário que deseja atualizar?")
    
        const UsuarioNovo = modelo(id);
    
        if (UsuarioNovo != undefined){
    
            usuarios.forEach((usuario, indice) => {
                if (usuarios.id == id){
                    usuarios[indice] = UsuarioNovo
                }
            })
            console.log("Usuário atualizado com sucesso.");
        }
    } else {
        console.log("Falha na atualização.")
    } 
};

const remover = () => {
    if (!listar()){
        return
    }

    const id = prompt("Qual ID deseja remover?")

    usuarios.forEach((usuario, indice) => {
        if (usuario.id == id) {
            usuarios.splice(indice, 1);
            console.log("Usuário removido com sucesso.")
        }
    })
};

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
}