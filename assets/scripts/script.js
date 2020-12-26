let pokeballClickButton= document.getElementById("pokeball-click-button");
let birthMonth = document.getElementById("birth-month");
let birthDay = document.getElementById("birth-day");
let typeResult = document.getElementById("type-result");
let pokeball = document.getElementById("pokeball");

let monthsArray = [
    "fogo",
    "psíquico",
    "inseto",
    "água",
    "pedra",
    "elétrico",
    "voador",
    "fantasma",
    "lutador",
    "fada",
    "planta",
    "dragão"
];

let daysArray = [
    "pedra",
    "elétrico",
    "fada",
    "inseto",
    "sombrio",
    "voador",
    "fantasma",
    "inseto",
    "fogo",
    "lutador",
    "planta",
    "psíquico",
    "água",
    "elétrico",
    "psíquico",
    "fantasma",
    "dragão",
    "água",
    "fogo",
    "fantasma",
    "fada",
    "lutador",
    "voador",
    "sombrio",
    "pedra",
    "fada",
    "planta",
    "dragão",
    "dagrão",
    "elétrico",
    "fogo"
];

pokeballClickButton.addEventListener("click", showType);

function showType() {
    if (Number.isInteger(parseInt(birthMonth.value)) && Number.isInteger(parseInt(birthDay.value))) {
        if ((birthMonth.value > 0 && birthMonth.value <= 12) && (birthDay.value > 0 && birthDay.value <= 31)) {
            pokeball.classList.remove("shake");
            pokeballClickButton.classList.remove("blink");
        setTimeout(function() {
            pokeball.classList.add("shake");
            pokeballClickButton.classList.add("blink");
        }, 100);
        setTimeout(function() {
            typeResult.innerText = monthsArray[birthMonth.value - 1] + " " + daysArray[birthDay.value - 1];
            clearInputs();
            }, 2000);
        } else {
            typeResult.style.fontSize = "15px";
            typeResult.innerText = "insira valores numéricos válidos para o seu aniversário";
            clearInputs()
        }
    }
}

function clearInputs () {
    birthMonth.value = "";
    birthDay.value = "";
}