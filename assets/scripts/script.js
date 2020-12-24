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
    pokeball.classList.remove("shake");
    setTimeout(function() {
        pokeball.classList.add("shake");
    }, 100);
    setTimeout(function() {
        typeResult.innerText = monthsArray[birthMonth.value - 1] + " " + daysArray[birthDay.value - 1]
        }, 2000);
}

console.log(pokeball);