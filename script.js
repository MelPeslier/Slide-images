

// Récupération des éléments de la page
const body = document.getElementById('body');
const imagesTrack = document.getElementById('images-track');
const cadres = document.getElementsByClassName('cadre');

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
    p = (1/250) * toMe;
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
    console.log('Actuel : ' + pourcentageActuel);

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

    for (let i = 0; i < cadres.length; i++) {
        cadres[i].animate(
            [
                {
                    backgroundPosition: '' + -pourcentageActuel + '% 0%'
                },
            ],
            {
                duration : 1200,
                fill : "forwards"
            }
        );
    }
}