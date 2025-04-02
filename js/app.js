const btn = document.querySelector("#clickableNumAdd");
const displayedCount = document.querySelector("#number");

let count = 0;

btn.addEventListener("click", (e) => {
    count++;
    displayedCount.innerHTML = count;
});