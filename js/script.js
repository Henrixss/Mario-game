var mario = document.querySelector('.mario');
var pipe = document.querySelector('.pipe');
var clouds = document.querySelector('.clouds');
var game_over_screen = document.querySelector('.game-over-screen');
var points = +document.querySelector('.points').textContent;

const jump = () => {
    mario.classList.add('jump'); 

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
 
}

const points_loop = setInterval(() => {//funcao para contabilizar os pontos a cada vez que o cano reseta

     points = points + 1;
    document.querySelector('.points').textContent = '' + points;
    
}, 1500);

const loop = setInterval(() =>{

    var pipeposition = pipe.offsetLeft;
    var marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    var cloudsposition = clouds.offsetLeft;

    if(pipeposition <= 81 && pipeposition > 0   && marioposition <= 73){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '50px';
        mario.style.marginLeft = '30px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsposition}px`;

        game_over_screen.style.display = 'block';

        clearInterval(loop);
        clearInterval(points_loop);
    }

}, 10);

document.addEventListener('keydown', jump);