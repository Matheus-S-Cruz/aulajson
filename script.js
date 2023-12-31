const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")


function cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value){
        const usuario = {
            login : campoNovoLogin.value,
            senha : campoNovaSenha.value
        }
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário Cadastrado com sucesso!");
    }
    else{
        alert("Você digitou duas senha diferentes!");
    }
}

function login(){  
    let login = campoLogin.value;
    let senha = campoSenha.value; 
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {        
                mensagem = "Usuário logado com sucesso!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./logado/home.html";
                break;
            }  
        }
        alert(mensagem);
}   
}