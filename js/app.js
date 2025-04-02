const btn = document.querySelector("#clickableNumAdd");
const displayedCount = document.querySelector("#number");

let count = 0;

// will add count
btn.addEventListener("click", (e) => {
    count++;
    displayedCount.innerHTML = count;
});