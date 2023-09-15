const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")

let usuarios = [];

function cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value){
        let usuario = {
            login : campoNovoLogin.value,
            senha : campoNovaSenha.value
        }
        usuarios.push(usuario);
        alert("Usuário Cadastrado com sucesso!");
    }
    else{
        alert("Você digitou duas senha diferentes!");
    }
}

function login(){
    let mensagem = "Usuário ou senha incorreta!";
    for(let usuario of usuarios){
        if(usuario.login == campoLogin.value && usuario.senha == campoSenha.value){
            mensagem = "Logado com sucesso!"
            break;
        }
    }
    alert(mensagem);            
}