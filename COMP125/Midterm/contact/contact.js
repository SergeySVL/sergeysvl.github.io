"use strict";

const signin = document.forms.signin;
const fName = signin.txtFName;
const lName = signin.txtLName;
const special = signin.txtSpecial;

const react = document.getElementById('react');

fName.oninput = () => {
    if (fName.value.length < 3) {
        fName.setCustomValidity("First name must be at least three characters");
    } else {
        fName.setCustomValidity("");
    }
}

lName.oninput = () => {
    if (lName.value.length < 3) {
        lName.setCustomValidity("Last name must be at least three characters");
    } else {
        lName.setCustomValidity("");
    }
}

special.oninput = () => {
    if (special.value.length < 5) {
        special.setCustomValidity("Please enter at least five characters");
    } else {
        special.setCustomValidity("");
    }
}

react.addEventListener('click', function() {
    window.location.href = "../SergeyLogunov_Midterm.html"
})

