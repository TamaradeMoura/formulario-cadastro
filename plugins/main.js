$(document).ready(function(){
    $('#telefone').mask('(+00) 00 00000-0000')
    
    $('#cpf').mask('000.000.000-00')
    
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            email: 'Por favor insira seu email',
            cep: 'Por favor, insira seu CEP',
            endereco: 'Por favor insira seu endereço',
        },
        submitHandler: function(form) {
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})