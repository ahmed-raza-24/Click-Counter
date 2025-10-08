let count = 0;
const btn = document.querySelector("#btn");
const display = document.querySelector("#count");

btn.addEventListener("click", function(){
    count++;
    display.textContent = count;
});
