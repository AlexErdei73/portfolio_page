const copyrights = document.querySelectorAll('.copyright');

const title = document.querySelector('h1');
const subtitles = document.querySelectorAll('h2');

let i = 0;
let direction = true;
const timer = setInterval(animate, 10);

const btnCode = document.querySelector('.code');
btnCode.addEventListener('mousedown', onMouseDown);
btnCode.addEventListener('mouseup', onMouseUp);

function animate(){
    const colorShift = Math.round(i / 4);

    shiftColor(colorShift);

    if (direction) {
        i++;
    } else {
        i--;
    }
    copyrights[0].style.left = i + 'px';
    copyrights[1].style.left = copyrights[0].style.left;
    if (i > 1024) {
        direction = false;
    }
    if (i < 0) {
        direction = true;
    } 
}

function shiftColor(value){
    title.style = `color: rgb(${255 - value}, ${value}, 255)`;
    subtitles.forEach(subtitle => subtitle.style = `color: rgb(${value} , ${255 - value}, 255)`);
}

function onMouseUp() {
    btnCode.classList.remove('down');
}

function onMouseDown() {
    btnCode.classList.add('down');
}
    