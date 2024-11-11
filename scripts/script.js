$(document).ready(function () {
    // Wow js init
    let wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    // Input Mask applying for phone
    $('#phone').inputmask({"mask": "+7 (999) 999-9999"});

    // Slick carousel init and set up
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

    // add Event listeners to menu / buttons
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



    // set up "Burger" menu
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


    // reload video after ending - the poster will be shown again
    let video = document.getElementById('video')

    video.addEventListener('ended', function () {
        video.load()
    });


    // Form validation and sending and handling
    const errorPopup = $('.error-popup-wrap')
    const form = $('form')
    const phonePattern = /\+7 \(\d{3}\) \d{3}-\d{4}/;

    form.on('submit', function (e) {
        e.preventDefault();

        let name = $(this).find('#name');
        let phone = $(this).find('#phone');
        name.removeClass('invalid');
        phone.removeClass('invalid');
        $(this).find('.registration__invalid-feedback')
            .css('visibility', 'hidden');
        let hasError = false;

        if (!name.val()) {
            name.addClass('invalid').next('span')
                .css('visibility', 'visible');
            hasError = true;
        }

        if (!phonePattern.test(phone.val())) {
            phone.addClass('invalid').next('span')
                .css('visibility', 'visible');
            hasError = true;
        }

        if (!hasError) {
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
                    errorPopup.find('.error-popup__text')
                        .text('Возникла ошибка при записи на урок, позвоните нам и запишитесь')
                    errorPopup.css('display', 'flex');
                }
            }).always(function () {
                e.target.reset()
            })
        }
    })

    // check validity inputs during typing
    const inputs = form.find('input');

    inputs.on('input', function () {
        if (this.id === 'phone') {
            if (phonePattern.test(this.value)) {
                $(this).removeClass('invalid').next('.registration__invalid-feedback').css('visibility', 'hidden');
            }
        } else if (this.value) {
            $(this).removeClass('invalid').next('.registration__invalid-feedback').css('visibility', 'hidden');
        }
    })


    //close popup "error-popup" by click outside the "error-popup" block or close button
    errorPopup.on('click', function (event) {
        if (event.target.id !== 'error-popup') {
            $(this).hide()
        }
    })

    // show form then registration__success clicked again
    $('.registration__success').on('click', function () {
        $('.registration__form form').css('opacity', 1);
        $('.registration__success').css({'opacity': 0, 'z-index': -1});
    })


    // popup schedule
    //open by button click
    $('#schedule').on('click', function (e) {
        $('#schedule-popup').css({'opacity': 1, 'pointer-events': 'auto'});
        $('body').addClass('modal-open')
    })


    // close by btn close click or outside the popup
    $('#schedule-popup').on('click', function (event) {
        event.stopPropagation();
        if ($(event.target).parent().find('.close_schedule').length || event.target.id === 'btn_close_schedule') {
            $(this).css({'opacity': 0, 'pointer-events': 'none'})
        }
        $('body').removeClass('modal-open');
    })

    //change style for tab bnt (labels)
    $('input[name="tab-group"]').on('click', function () {
        $('.schedule__tab-title').removeClass('active');
        $('label[for="'+this.id+'"]').addClass('active')
    })

})






