const box = document.getElementById("sqrDiv");
var arr = document.createElement("div");
arr.classList.add("column");
for(let i =0;i<16;i++){
    let temparr = document.createElement("div");
    temparr.classList.add("row");
    for(let j=0;j<16;j++){
        let temp = document.createElement("div");
        temp.classList.add("pixel");
        temp.addEventListener("mouseover", pixelChange);
        temparr.appendChild(temp);
    }

    arr.appendChild(temparr);
}
box.appendChild(arr);
console.log(arr);

function pixelChange(){
    this.classList.add("changed");
}