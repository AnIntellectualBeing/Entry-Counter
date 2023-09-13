//document.getElementById("count-el").innerText = 5;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count++;
    console.log("preseed" + count);
    countEl.innerHTML=count;

}
function decrement(){
    count--;
    countEl.innerHTML=count;
}
function save(){
    let countStr = count + "-";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

