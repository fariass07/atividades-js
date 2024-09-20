const form = document.querySelector("form")
const divTabuada = document.querySelector(".tabuada")

form.addEventListener("submit", (e) =>
{
    divTabuada.innerHTML = "";
    const inputValue = document.querySelector("input").value;
    e.preventDefault();

    for(let i = 1; i <= 10; i++)
    {
        divTabuada.innerHTML += `<p>${inputValue} x ${i} = ${inputValue * i}</p>`
    }
})