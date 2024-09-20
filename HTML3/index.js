const botao = document.querySelector("#wrapper>button");
const input = document.querySelector("#wrapper>input");

input.style.color = "red";

botao.addEventListener("click", () => {
    input.value = (input.value === "OFF") ? "ON" : "OFF";

    input.style.color = (input.style.color === "red") ? "green" : "red";

})