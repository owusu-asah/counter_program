let saveEl = document.getElementById("save-el");
let counted = document.getElementById("counted");

let count = 0;

function increase() {
    count += 1;
    counted.textContent = count;
};   

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    count = 0;
    counted.textContent = count;
}