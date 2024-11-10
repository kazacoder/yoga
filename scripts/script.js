$(document).ready(function () {
    let wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    )
    wow.init();

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


    $('#about_link').on('click', function (e) {
        e.preventDefault();
        $('#about')[0].scrollIntoView({behavior: 'smooth'});
    })
    $('#teachers_link').on('click', function (e) {
        e.preventDefault();
        $('#teachers')[0].scrollIntoView({behavior: 'smooth'});
    })
    $('#services_link, #services_btn').on('click', function (e) {
        e.preventDefault();
        $('#services')[0].scrollIntoView({behavior: 'smooth'});
    })
    $('#studies_link').on('click', function (e) {
        e.preventDefault();
        $('#studies')[0].scrollIntoView({behavior: 'smooth'});
    })
    $('#contacts_link, #contacts_btn').on('click', function (e) {
        e.preventDefault();
        $('#contacts')[0].scrollIntoView({behavior: 'smooth'});
    })

    const menu = $('#menu')
    const menuClose = $('#menu__close')
    const burger = $('#burger')

    burger.on('click', function () {
        menu.addClass('open');
        burger.addClass('pressed')
        menuClose.addClass('rotated')
    })

    menu.on('click', function () {
        menu.removeClass('open')
        menuClose.removeClass('rotated')
        burger.removeClass('pressed')
    })


    let video = document.getElementById('video')
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
    video.addEventListener('ended', function () {
        video.load()
    });

    const errorPopup = $('.error-popup-wrap')

    $('form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: 'https://testologia.ru/checkout',
            data: {
                name: $('#name').val()
            }
        }).done(function (data) {
            if (data.success) {
                $('.registration__form form').css('opacity', 0);
                $('.registration__success').css({'opacity': 1, 'z-index': 1});
            } else {
                errorPopup.css('display', 'flex');
            }
        })
    })

    errorPopup.on('click', function (event) {
        if (event.target.id !== 'error-popup') {
            $(this).hide()
        }
    })

})





