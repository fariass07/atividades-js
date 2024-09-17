### Para fins de treino, montei uma lista com poucos exercícios, porém que irão desafiar o entendimento de vocês sobre funções e sobre manipulação de DOM.

# Lista de Exercícios de Funções

1. Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.

2. A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.

3. Crie uma função que recebe dois objetos, o primeiro é o piloto, como no exemplo:
~~~json
{
    "nome": "Bryan O'Conner",
    "idade":46
}
~~~
e o segundo do carro:
~~~json
{
    "modelo": "Mitsubishi Eclipse",
    "cavalos": 210
}
~~~
O objetivo da função é verificar a idade do usuário e a potência do motor, se o piloto tiver 18 anos ou mais ou o motor tiver menos de 70 cavalos ele poderá dirigir, se não, não poderá, a função deve retornar um booleano que deve ser exibido na tela. OBS: Os exemplos não estão no formato de objetos do JS e sim no formato JSON, adapte para a atividade e se quiser, troque os dados.

4. Crie um array com 10 números e, usando o método map com uma arrow function dentro, retorne outro array com os números do array inicial multiplicados pelos seus índices, exiba o array antigo e o novo no console.

# Lista de Exercícios de DOM

1. Faça um programa que capture o evento de um input na sua tela e mostre automaticamente a tabuada desse número abaixo.

2. Dado esse HTML:
~~~html
<input type="text" id="input" readonly/>
<button type="button" id="button">Click Me</button>
~~~
E esse JS:
~~~js
const button = document.querySelector('#button');
const input = document.querySelector('#input');

const handleClick = () => {
  input.value = 'olá mundo';
};
~~~
Faça com que o input tenha seu valor alterado quando o botão for clicado.

3. Dado esse HTML:
~~~html
<div id="wrapper">
    <input type="text" value="OFF" readonly/>
    <button type="button">Click Me</button>
</div>
~~~
Faça um código JS que seleciona o input e o botão com base no fato de serem filhos da div com id wrapper e não diretamente pela tag deles. Dica: Emmet.
Depois faça um código que intercale "Ativado" e "Desativado" dentro do input quando o usuário clica no botão.

