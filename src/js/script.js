$(document).ready(function() {
    $('.header__link').hover(function(){
        $('.header__map').fadeIn('slow');
    },
    function(){
        $('.header__map').fadeOut('slow');
    });
    $('.promo__info').hover(function(){
        $('.promo__nameplate').fadeIn('slow');
    },
    function(){
        $('.promo__nameplate').fadeOut('slow');
    });
    $('[data-modal=education]').on('click', function () {
        $('.overlay, #education').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #education, #thanks').fadeOut('slow');
    });
    function valideForms (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required"
            },
            messages: {
                name: {
                  required: "Пожалуйста, введите своё имя",
                  minlength: jQuery.validator.format("Веедите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона"
            }
        });
    };

    valideForms('#education form');
});

/* $(document).ready(function() {
    $('.promo__link').on('click', function(){
        $('.promo__map').fadeIn('slow');
    });
}); */