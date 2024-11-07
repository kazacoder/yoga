$(document).ready(function () {
    $('.teachers__carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {breakpoint: 1400,},
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }

            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }

            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],

    });


    // let video = document.getElementById('video')
    // let storedTimestamp = 0;
    //
    //
    // video.addEventListener('pause', () => {
    //     storedTimestamp = video.currentTime
    //     video.load()
    // });
    //
    // video.addEventListener('play', function () {
    //     video.currentTime = storedTimestamp
    // });

})





