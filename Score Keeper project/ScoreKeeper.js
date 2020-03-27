var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var winningScoreDisplay = document.querySelector('#winningScoreDisplay');
var numInput = document.querySelector('input');
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;



p1button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
        gameOver = (p1Score === winningScore)? true : false; 
        if (gameOver) 
            p1Display.classList.add('winner');    
    }
});

p2button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        gameOver = (p2Score === winningScore)? true : false;
        if (gameOver) 
            p2Display.classList.add('winner');
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
}

numInput.addEventListener("change", function(){
    winningScore = Number(numInput.value);
    winningScoreDisplay.textContent = winningScore; 
    reset();
});