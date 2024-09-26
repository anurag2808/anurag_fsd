function validateForm() {
    // Get form elements
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    var isValid = true;

    // Username validation
    if (username.value.trim() === "") {
        setInvalid(username, "Username cannot be empty.");
        isValid = false;
    } else {
        setValid(username);
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        setInvalid(email, "Please enter a valid email address.");
        isValid = false;
    } else {
        setValid(email);
    }

    // Phone number validation
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
        setInvalid(phone, "Phone number must be exactly 10 digits and numeric.");
        isValid = false;
    } else {
        setValid(phone);
    }

    // Password validation
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$&]).{7,}$/;
    if (!passwordPattern.test(password.value.trim())) {
        setInvalid(password, "Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character (@, #, $, &).");
        isValid = false;
    } else {
        setValid(password);
    }

    // Confirm password validation
    if (password.value.trim() !== confirmPassword.value.trim()) {
        setInvalid(confirmPassword, "Passwords do not match.");
        isValid = false;
    } else {
        setValid(confirmPassword);
    }

    if (isValid) {
        alert("Registration successful!");
    }
    return isValid;
}

function setInvalid(element, message) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    element.nextElementSibling.textContent = message;
}

function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    element.nextElementSibling.textContent = "";
}
