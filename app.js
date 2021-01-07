let KEY_DOWN = 40;
let KEY_UP = 38;
let KEY_LEFT = 37;
let KEY_RIGHT = 39;
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

for(const square of cellGame) {
        square.addEventListener('keypress', function(event) {
                switch (event.button) {
                        case KEY_DOWN:

                                break;

                        case KEY_UP:

                                break;
                        case KEY_LEFT:

                                break;

                        case KEY_RIGHT:

                                break;
                }
        });
}

