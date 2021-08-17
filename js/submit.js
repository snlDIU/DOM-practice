document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email == 'abc@com' && password == 1234) {

        window.location.href = 'banking.html';
    }
})


