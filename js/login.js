document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email == 'abc@com' && password == "A1234") {

        window.location.href = 'banking.html';
    }
})

document.getElementById('guest-login').addEventListener('click', function () {
    window.location.href = 'banking.html';
})

