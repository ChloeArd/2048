let score = 0;
let cellGame = document.getElementsByClassName("cellGame");
let findCell = cellGame[Math.floor(Math.random() * cellGame.length)];

function createTwo (){
        let createTwo = document.createElement("div");
        createTwo.innerHTML = "2";
        createTwo.style.backgroundColor = "red";
        createTwo.style.width = "100%";
        createTwo.style.height = "100%";
        createTwo.style.textAlign = "center";
        findCell.appendChild(createTwo);
}

createTwo();
findCell = cellGame[Math.floor(Math.random() * cellGame.length)];
createTwo();

