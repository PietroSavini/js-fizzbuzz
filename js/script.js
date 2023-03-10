let game;
let classColor;

const gridElem = document.querySelector(".grid");
for (let i = 1; i <= 100; i++) {
    
    if (i % 15 === 0) {
        game = "fizzbuzz";
        classColor = "red";
    } else if (i % 5 === 0) {
        game = "buzz";
        classColor = "yellow";
    } else if(i % 3 === 0){
        game = "fizz";
        classColor = "acqua";
    } else{
        game = i;
        classColor ='';
    }
    console.log(game , classColor);
    gridElem.innerHTML += `<div id="touch" class="box ${classColor}">${game}</div>`;
}

