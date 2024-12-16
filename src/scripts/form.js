$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    
    $('#form').validate({
        errorElement: 'span',

        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                minlength: 15,
                maxlength: 15
            },
            cep: {
                required: true,
                minlength: 9,
                maxlength: 9
            },
            'type-class': {
                required: true
            },
            'local-class': {
                required: true
            },
            level: {
                required: true
            },
            age: {
                required: true
            },
            objective: {
                required: true
            },
            'message-optional': {
                required: false
            }
        },

        messages: {
            name: "Por favor, insira seu nome.",
            email: "Por favor, insira um e-mail válido.",
            tel: "Por favor, insira um número de telefone.",
            cep: "Por favor, insira seu CEP.",
            'type-class': "Por favor, selecione o tipo de aula.",
            'local-class': "Por favor, insira o local da aula.",
            level: "Por favor, selecione o nível.",
            age: "Por favor, insira sua idade.",
            objective: "Por favor, insira seu objetivo."
        },

        errorPlacement: function(error, element) {
            error.insertAfter(element); 
        },

        submitHandler: function(form, event) {
            event.preventDefault();
            $('#success-alert').removeClass('d-none');
            $(form)[0].reset();
        }
    });

    $('#form input, #form select, #form textarea').on('blur', function() {
        $(this).valid();
    });
})