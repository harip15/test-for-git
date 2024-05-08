const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

let value = 0;

increase.onclick = function(){
    value += 1;
    count.innerText = value;
}
decrease.onclick = function(){
    value -= 1;
    count.innerText = value;
}
reset.onclick = function(){
    value = 0;
    count.innerText = value;
}
