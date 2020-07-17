$(document).ready(function() {
    // ховер эффект при наведении на карту
    $('.header__link').hover(function(){
        $('.header__map').fadeIn('slow');
    },
    function(){
        $('.header__map').fadeOut('slow');
    });
    // ховер эффект при наведении на иконку информации
    $('.promo__info').hover(function(){
        $('.promo__nameplate').fadeIn('slow');
    },
    function(){
        $('.promo__nameplate').fadeOut('slow');
    });
    // открыти и закрытие модального окна
    $('[data-modal=education]').on('click', function () {
        $('.overlay, #education').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #education, #thanks').fadeOut('slow');
    });
    // валидация форм
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
    // маска ввода номера телефона
    $('input[name=phone]').mask("+7 (999) 999-9999");
    // отправка писем с сайта
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#education').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

/* $(document).ready(function() {
    $('.promo__link').on('click', function(){
        $('.promo__map').fadeIn('slow');
    });
}); */