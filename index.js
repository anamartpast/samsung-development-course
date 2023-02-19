function onSubmit(e) {
    e.preventDefault();
    let valid = true;

    if (!checkName()) {
        valid = false;
    }
    if (!checkEmail()) {
        valid = false;
    }
    if (!checkPassword()) {
        valid = false;
    }
    if (!checkConfirmationPassword()) {
        valid = false;
    }

    if (valid) {    
        alert("La inscripción ha sido correcta");
    }
}

function checkName() {
    const name = document.getElementById('name');
    const value = name.value;
    const nameMsg = document.getElementById("name_msg");
    let errorMessage;
    const validName = /^[A-Za-z]+$/g;
    let valid = true;

    if (value === "") {
        errorMessage = "Rellene este campo";
    } else if (value.match(validName) === null) {
        errorMessage = "Campo inválido";
    }

    if (errorMessage) {
        nameMsg.innerText = errorMessage;
        name.classList.remove('valid');
        name.classList.add('invalid');
        valid = false;
    } else {
        nameMsg.innerText = "";
        name.classList.remove('invalid');
        name.classList.add('valid');
    }

    return valid;
}

function checkEmail() {
    const elem = document.getElementById('email');
    const value = elem.value;
    const elemMsg = document.getElementById("email_msg");
    let valid = true;
    let errorMessage = "";
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (value === "") {
        errorMessage = "Rellene este campo";
    } else if (elem.value.match(validEmail) === null) {
        errorMessage = "Campo inválido";
    }
    
    elemMsg.innerText = errorMessage;

    if (errorMessage) {
        elem.classList.remove('valid');
        elem.classList.add('invalid');
        valid = false;
    } else {
        elem.classList.remove('invalid');
        elem.classList.add('valid');
    }

    return valid;
}

function checkPassword() {
    const elem = document.getElementById('password');
    const value = elem.value;
    const elemMsg = document.getElementById("password_msg");
    let valid = true;
    let errorMessage = "";

    if (value === "") {
        errorMessage = "Rellene este campo";
    } else if (value.length < 8) {
        errorMessage = "No debe tener menos de 8 caracteres";
    }
    
    elemMsg.innerText = errorMessage;

    if (errorMessage) {
        elem.classList.remove('valid');
        elem.classList.add('invalid');
        valid = false;
    } else {
        elem.classList.remove('invalid');
        elem.classList.add('valid');
    }

    return valid;
}

function checkConfirmationPassword() {
    const elem = document.getElementById('confirm_password');
    const password = document.getElementById('password');
    const value = elem.value;
    const passwordValue = password.value;
    const elemMsg = document.getElementById("confirm_password_msg");
    let valid = true;
    let errorMessage = "";

    if (value === "") {
        errorMessage = "Rellene este campo";
    } else if (value.length < 8) {
        errorMessage = "No debe tener menos de 8 caracteres";
    } else if (value !== passwordValue) {
        errorMessage = "Las contraseñas deben coincidir";
    }
    
    elemMsg.innerText = errorMessage;

    if (errorMessage) {
        elem.classList.remove('valid');
        elem.classList.add('invalid');
        valid = false;
    } else {
        elem.classList.remove('invalid');
        elem.classList.add('valid');
    }

    return valid;

}

