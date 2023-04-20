

// Récupération des éléments de la page
let body = document.getElementById('body');
let imagesTrack = document.getElementById('images-track');
let images = Array.from(document.getElementsByClassName('image'));



// Variables
let posX = 0;
let toMe = 0;
let isDown = false;

let minPourcentage = -100;
let maxPourcentage = 0;
let pourcentageActuel = 0;



// Evvents Listenners !
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



// fonctions
function calcPourcentage(){
    p = (1/100) * toMe;
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
    // console.log('Actuel : ' + pourcentageActuel);

    imagesTrack.animate(
        [
            {
                transform:
                'translate(' + pourcentageActuel + '%, 0%)'
            },
        ],
        {
            duration : 1200,
            // fill : "forwards" 
            // La nouvelle position sera retenue !
            fill: "forwards"
        }
    );
    
    images.forEach((image , index) => {
        console.log('img-' + index);
        image.animate(
            [
                {
                    objectPosition:
                    'translate(' + -pourcentageActuel + '%, 50%)'
                },
            ],
            {
                duration : 1200,
                fill: "forwards" 
            }
        );
    });
}