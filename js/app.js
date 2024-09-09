// számokat tartalmazó négyzetek létrehozása:
const makeBoxes = () =>{
    const data = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
        {number: 11},
        {number: 12},
        {number: 13},
        {number: 14},
        {number: 15}
    ];
    return data.map(({number}) => `<div id="${number}class="box">${number}</div>`);

}

// A négyzetek megjelenítése a html-ben:
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');
};

//console.log("Boxlista: ", document.querySelectorAll(".box"))

document.addEventListener("DOMContentLoaded", () =>{
    renderBoxes()
    console.log("Boxlista: ", document.querySelectorAll(".box"))
});