const game = document.getElementById("game");
const player = document.getElementById("player");
const statusText = document.getElementById("status");

let playerLeft = 125;
let gameOver = false;

document.addEventListener("keydown", function (e) {
    if (gameOver) return;

    if (e.key === "ArrowLeft" && playerLeft > 0) {
        playerLeft -= 20;
    }
    if (e.key === "ArrowRight" && playerLeft < 250) {
        playerLeft += 20;
    }

    player.style.left = playerLeft + "px";
});


function createObstacle() {
    if (gameOver) return;

    const obstacle = document.createElement("div");
    obstacle.style.width = "50px";
    obstacle.style.height = "50px";
    obstacle.style.background = "red";
    obstacle.style.position = "absolute";
    obstacle.style.top = "0px";
    obstacle.style.left = Math.floor(Math.random() * 6) * 50 + "px";

    game.appendChild(obstacle);

    let obstacleTop = 0;

    const fall = setInterval(() => {
        if (gameOver) {
            clearInterval(fall);
            return;
        }

        obstacleTop += 5;
        obstacle.style.top = obstacleTop + "px";

        // Collision check
        if (
            obstacleTop > 330 &&
            obstacleTop < 390 &&
            parseInt(obstacle.style.left) === playerLeft
        ) {
            statusText.innerText = "GAME OVER x ";
            gameOver = true;
            clearInterval(fall);
        }

        // Remove obstacle if it goes out
        if (obstacleTop > 400) {
            clearInterval(fall);
            game.removeChild(obstacle);
        }

    }, 30);
}

// Generate obstacles every 1 second
setInterval(createObstacle, 1000);
