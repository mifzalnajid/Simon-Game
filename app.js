let gameSeq = [];
let userSeq = [];
let userCol = [];
let start = false;
let level = 0;
let color = ['red', 'blue', 'purple', 'green'];
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game started");
        start = true;
        levelUp();
    }
})
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let rndmIndx = Math.floor(Math.random() * 4);
    let rndmClr = color[rndmIndx];
    let rndmBtn = document.querySelector(`.${rndmClr}`);
    gameSeq.push(rndmClr);
    console.log(gameSeq);
    gameFlash(rndmBtn);

}

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove('gameflash');
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 250);
}
function checkAns(indx) {
    if (userSeq[indx] === gameSeq[indx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
            console.log("game is going")
        }
    }
    else {
        h3.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key to start`;
    }
}

function btnPressed() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener('click', btnPressed);
}