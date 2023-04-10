$(document).ready(function() {

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: { 
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                }
            },
            messages: {
                name: {
                    required: "Введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символов!")
                },
                phone: "Введите ваш телефон",
                email: {
                    required: "Введите свой email",
                    email: "Не верно введен адрес",
                }
            },
        });
    }
    validateForms(".feed-form");
    validateForms(".feed-form2");

    $("input[name=phone]").mask("+7 (999) 999-99-99");

    $("form").submit(function(e) {
        e.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
    
    
                $("form").trigger("reset");
            });
            return false;
    });
});