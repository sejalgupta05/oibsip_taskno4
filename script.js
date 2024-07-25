document.addEventListener('DOMContentLoaded', function() {
    const showLogin = document.getElementById('showLogin');
    const showRegister = document.getElementById('showRegister');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const registerFormContainer = document.getElementById('registerFormContainer');

    showLogin.addEventListener('click', function() {
        loginFormContainer.style.display = 'block';
        registerFormContainer.style.display = 'none';
    });

    showRegister.addEventListener('click', function() {
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    });

    // Register Function
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var username = document.getElementById('regUsername').value;
        var password = document.getElementById('regPassword').value;

        if (localStorage.getItem(username)) {
            alert('User already exists!');
        } else {
            localStorage.setItem(username, password);
            alert('Registration successful! Please login.');
            showLogin.click(); // Switch to login form
        }
    });

    // Login Function
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;

        if (localStorage.getItem(username) === password) {
            alert('Login successful!');
            window.location.href = 'secured.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
