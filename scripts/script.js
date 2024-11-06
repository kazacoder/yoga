let video           = document.getElementById('video')
let storedTimestamp = 0;


video.addEventListener('pause', () => {
    storedTimestamp = video.currentTime
    video.load()
});

video.addEventListener('play', function () {
    video.currentTime = storedTimestamp
});



