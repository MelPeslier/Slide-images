let imagesTrack = document.getElementById('body');

imagesTrack.addEventListener('mousedown', (event) => {
    console.log("MOUSEDOWN: " + event.clientX);
    imagesTrack.addEventListener('mousemove', (event2) => {
        console.log("mousemove : " + event2.clientX)
    });
});

// imagesTrack.addEventListener('mouseover')