



let body = document.getElementById('body');
let imagesTrack = document.getElementById('images-track');

let posX = 0;
let toMe = 0;
let isDown = false;

let minPourcentage = -100;
let maxPourcentage = 0;
let pourcentageActuel = 0;

body.addEventListener('mousedown', (event) => {
    isDown = true;
    posX = event.clientX;
});

body.addEventListener('mousemove', (event) => {
    toMe = event.clientX - posX;
    seekMovement();
});

body.addEventListener('mouseup', () => {
    isDown = false;
})

function calcPourcentage(){
    p = (1/500) * toMe;
    let final = p + pourcentageActuel

    if (final > maxPourcentage){
        return maxPourcentage;
    }

    if (final < minPourcentage){
        return minPourcentage;
    }

    return final;
}

function seekMovement(){
    if(!isDown){
        return
    }

    pourcentageActuel = calcPourcentage();
    console.log('pourcentage = ' + pourcentageActuel);
    imagesTrack.style.transform = 'translate('+pourcentageActuel+'%, 0%)';
}