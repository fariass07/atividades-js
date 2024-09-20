// Exercicio #3

function PegarIdade() 
{
    const idade = prompt("Qual a sua idade?");
    return parseInt(idade);
}

function PegarCavalos() 
{
    const cavalos = prompt("Quantos cavalos o carro possui?");
    return parseInt(cavalos);
}

function VerificarIdade(idade, cavalos) 
{
    if (idade >= 18 || cavalos < 70) 
    {
        alert("Pode dirigir.")
    }
    else
    {
        alert("Não pode dirigir.")
    }
}

const idadeUsuario = PegarIdade();
const cavalosUsuario = PegarCavalos();
VerificarIdade(idadeUsuario, cavalosUsuario)
