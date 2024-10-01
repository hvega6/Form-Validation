const { get } = require("express/lib/response");
const { registerNode } = require("three/webgpu");

const errorDisplay = document.getElementById("errorDisplay");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("passwordCheck");
const termsCheckbox = document.getElementById("terms");
const successMessage = document.getElementById("successMessage")

function showError(message) {
    errorDisplay.textContent = message;
    errorDisplay.style.display = 'block'
}

function isValidEmail(email) {
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        submitForm('')
    }
});

registrationForm.addEventListener("submit", (event) {
    let isValid = true;

    const username = usernameInput.value.trim()

    //user registration validation
    if (username === '') {
        return showError("Username cannot be blank");
    }
    if (username.length < 4) {
        return showError("username must be at least 4 characters long");
    }
    if (new Set(username).size < 2) {
        return showError("Username must have two unique characters.");
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return showError("Username cannot contain special characters or whitespace.");
    }
    if (isUsernameTaken(username)) {
        return showError("That username is already taken.");
    }

    //Email validation
    if (!isValidEmail(email)){ 
        return showError("Please enter a valid email address")
    }
    if (email.toLowerCase().endsWith("@example.com")){
        return showError("Cannot end with @example.com")
    }

    

    // If all validations pass, store the user data
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username.toLowerCase(), email: email.toLowerCase(), password });
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form and show success message
    this.reset();
    showError('Registration successful!'); // Using error display for success message
});