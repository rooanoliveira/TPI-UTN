$(document).ready(function() {
    const navbar = $('.navbar');
    $(window).scroll(function() {
        if ($(window).innerWidth() >= 768) {
            if ($(window).scrollTop() > 50) {
                navbar.addClass('navbar-scrolled');
            } else {
                navbar.removeClass('navbar-scrolled');
            }
        }
    });
    var emailNewsletter = $('#emailNewsletter');
    var inputName = $('#inputName');
    var inputMail = $('#inputMail');
    var inputMessage = $('#inputMessage');
	
	// adiciona validação ao evento keyup do campo Newsletter
	emailNewsletter.keyup(validateMailNewsletter);
	inputName.keyup(validateInputName);
	inputMail.keyup(validateInputMail);
	inputMessage.keyup(validateInputMessage);

	// adiciona validação ao evento submit do formulário Newsletter
	$('#newsletterForm').submit(function(event) {
		// impede que o formulário seja enviado
		event.preventDefault();
		
		// verifica se os campos são válidos
		if (validateMailNewsletter()) {
            // se tudo estiver correto, envia o formulário / desativado
            // this.submit();
            // adicionado um alerta pra visualizar o envio do formulário
            alert("Formulário enviado con suceso!");
            // limpar campo depois de enviar formulario
            newsletterForm.reset();
        }else {
            console.log("Formulario no enviado!");
        }
	});


    // adiciona validação ao evento submit do formulário Contacto
	$('#contactForm').submit(function(event) {
		// impede que o formulário seja enviado
		event.preventDefault();
		
		// verifica se os campos são válidos
		if (validateInputName() && validateInputMail() && validateInputMessage()) {
            // se tudo estiver correto, envia o formulário / desativado
            // this.submit();
            // adicionado um alerta pra visualizar o envio do formulário
            alert("Contacto enviado con suceso!");
            // exibir valores no console log
            console.log("Nombre: ", inputName.val());
            console.log("Email: ", inputMail.val());
            console.log("Mensaje: ", inputMessage.val());
            // limpar campo depois de enviar formulario
            contactForm.reset();
        } else {
            console.log("Contacto no enviado!");
        }
	});
    function validateMailNewsletter() {
		if (!isValidEmailAddress(emailNewsletter.val())) {
			emailNewsletter.addClass('is-invalid');
			return false;
		} else {
			emailNewsletter.removeClass('is-invalid');
			return true;
		}
	}
    function validateInputName() {
        var inputNameValue = inputName.val();
        if (inputNameValue.length < 4) {
            inputName.addClass('is-invalid');
            $('.helpNameBlock').removeClass('d-none');
            return false;
        } else {
            inputName.removeClass('is-invalid');
            $('.helpNameBlock').addClass('d-none');
            return true;
        }
    }
    function validateInputMail() {
		if (!isValidEmailAddress(inputMail.val())) {
			inputMail.addClass('is-invalid');
            $('.helpMailBlock').removeClass('d-none');
			return false;
		} else {
			inputMail.removeClass('is-invalid');
            $('.helpMailBlock').addClass('d-none');
			return true;
		}
	}
    function validateInputMessage() {
        var inputMessageValue = inputMessage.val();
        if (inputMessageValue.length < 10) {
            inputMessage.addClass('is-invalid');
            $('.helpMessageBlock').removeClass('d-none');
            return false;
        } else {
            inputMessage.removeClass('is-invalid');
            $('.helpMessageBlock').addClass('d-none');
            return true;
        }
    }
    function isValidEmailAddress(emailAddress) {
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return pattern.test(emailAddress);
	}
});