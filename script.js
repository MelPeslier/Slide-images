let imagesTrack = document.getElementById('body');

let posX = 0;
let toMe = 0;
let isDown = false

imagesTrack.addEventListener('mousedown', (event) => {
    isDown = true;
    posX = event.clientX;
});

imagesTrack.addEventListener('mousemove', (event) => {
    toMe = event.clientX - posX;
    seekMovement();
});

imagesTrack.addEventListener('mouseup',(event) => {
    isDown = false;
})

function seekMovement(){
    if(!isDown){
        return
    }
    console.log('x : ' + toMe);
    return
}

// imagesTrack.addEventListener('mouseover')