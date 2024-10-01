const { get } = require("express/lib/response");
const { registerNode } = require("three/webgpu");

const errorDisplay = document.getElementById("errorDisplay");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("passwordCheck");
const termsCheckbox = document.getElementById("terms");
const successMessage = document.getElementById("successMessage")


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
    

    // If all validations pass, store the user data
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username.toLowerCase(), email: email.toLowerCase(), password });
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form and show success message
    this.reset();
    showError('Registration successful!'); // Using error display for success message
});