let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("titulo").innerHTML = "Bem vindo, "+usuario.login+"!";


function deslogar(){
    window.location.href = "../index.html"
}
function voltar(){
    window.location.href = "../logado/home.html"
}

function montanhas(){
    window.location.href = "../biomas/montanhas.html"
}
function savanas(){
    window.location.href = "../biomas/savanas.html"
}
function praias(){
    window.location.href = "../biomas/praias.html"
}
function florestas(){
    window.location.href = "../biomas/florestas.html"
}
function cavernas(){
    window.location.href = "../biomas/cavernas.html"
}
function ilhas(){
    window.location.href = "../biomas/ilhas.html"
}
