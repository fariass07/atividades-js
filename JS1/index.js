function calcularNum(a, b, c)
{
    return a + b + c
}

function Media(a, b, c)
{
    const soma = calcularNum(a, b, c)
    const media = soma / 3
    return media
}

const n1 = parseFloat(prompt("Digite o primeiro número: "))
const n2 = parseFloat(prompt("Digite o segundo número: "))
const n3 = parseFloat(prompt("Digite o terceiro número: "))

const resultadoMedia = Media(n1, n2, n3)

alert("A média dos números é: " + resultadoMedia);