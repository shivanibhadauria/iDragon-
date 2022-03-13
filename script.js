score = 0;
Cross = true;
 audio = new Audio('music.mp3');
 audiogo = new Audio('gameover.mp3');

 setTimeout(() => {
     audio.play();
 }, 100);

document.onkeydown = function (e) {
    console.log("key code is", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino')
        dino.classList.add('animateDino')

        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);

    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }


}

setInterval(() => {

    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    gameOver = document.querySelector('.gameOver');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);
    console.log(offsetX, offsety)
    if (offsetX < 200 && offsety < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            
            audiogo.pause();
            audio.pause();
        }, 100);

    }
    else if (offsetX < 145 && Cross) {
        score += 1;
        updateScore(score);
        Cross = false;
        setTimeout(() => {
            Cross = true;

        }, 1000);

        setTimeout(() => {

            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';



        }, 5000);



    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "your score" + "" + score;
}