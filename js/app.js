// számokat tartalmazó négyzetek létrehozása:
const makeBoxes = () => {
  const data = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
    { number: 11 },
    { number: 12 },
    { number: 13 },
    { number: 14 },
    { number: 15 },
  ];
  return data.map(
    ({ number }) => `<div id="${number}class="box">${number}</div>`
  );
};

const renderBoxes = () => {
  const boxesContainer = document.querySelector(".boxes");
  boxesContainer.innerHTML = "";
  boxesContainer.innerHTML = makeBoxes().join("");
};

const getinpvalue = () => {
  return document.querySelector("#num").value;
};

const checkvalue = () => {
  const value = getinpvalue();
  if (!value.trim()) {
    return [false, 0];
  }
  if (isNaN(value)) {
    return [false, 0];
  }
  const currentvalue = Number(value);
  if (currentvalue < 1 || currentvalue > 15) {
    return [false, 0];
  }
  return [true, currentvalue];
};

const rndnum = () => {
  return Math.floor(Math.random() * 256);
};

const createColor = () => {
  const r = rndnum();
  const g = rndnum();
  const b = rndnum();
  return [r, g, b];
};

const colorBox = () => {
  const [isvalid, number] = checkvalue();
  if (!isvalid) {
    senderrormessage();
    return;
  }
  const boxes = document.querySelectorAll(".box");
  const box = Array.from(boxes).find((b) => Number(b.id) == number);
  const [r, g, b] = createColor();
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

const senderrormessage = () => {
  alert("Helytelen értéket adott meg!");
};

const coloring = () => {
  const button = document.querySelector(".card button:nth-child(3)");
  button.addEventListener("click", () =>{
    colorBox();
    clearInput();
  });
};

const clearInput = () => {
  const inputElement = document.querySelector("#num");
  inputElement.textContent = "none";
  inputElement.focus();
};

const reset = () =>{
    const resetButton = document.querySelector(".card button:nth-child(4)");
    resetButton.addEventListener("click", ()=>{
        renderBoxes();
        clearInput();
    })
}

document.addEventListener("DOMContentLoaded", () => {
    renderBoxes();
    coloring();
    reset();
});