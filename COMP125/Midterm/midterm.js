"use strict";

const greeting = document.querySelector('.greeting');
const courses = document.getElementById('courses');
const textColor = document.getElementById('textColor');
const mission = document.querySelector('.mission');
const react = document.getElementById('react');

document.addEventListener("load", greetUser());

function greetUser() {
    alert("Greetings, customer!");
    let name = prompt('Please enter your name: ');
    alert(`Welcome to Miami Retro Vibe, ${name}!`);
    greeting.innerHTML = `<h1><i class="bi bi-chat-dots"></i>&nbsp;&nbsp;&nbsp;Welcome to Miami Retro Vibe, ${name}!</h1>
                            <h6>!!!===============================!!!</h6>`;
    greeting.classList.add('newcolor');
}

courses.addEventListener('click', function() {
    let parent = document.getElementById('row');
    let newParagraph1 = document.createElement('div');
    newParagraph1.classList.add('col');
    newParagraph1.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="assets/countach.jpg" class="card-img-top" alt="countach">
                            <div class="card-body">
                            <p class="card-text">The Lamborghini Countach is an iconic Italian mid-engine supercar produced from 1974 to 1990, famous for defining
                                the "wedge" design shape and popularizing scissor doors.</p></div></div>`;
    let newParagraph2 = document.createElement('div');
    newParagraph2.classList.add('col');
    newParagraph2.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="assets/daytona.jfif" class="card-img-top" alt="daytona">
                            <div class="card-body">
                            <p class="card-text">The Ferrari Daytona is a defining icon of late 1960s and early 1970s automotive engineering. It is celebrated
                                for its, timeless, aggressive design, immense speed and its status.</p></div></div>`;
    let newParagraph3 = document.createElement('div');
    newParagraph3.classList.add('col');
    newParagraph3.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="assets/porsche.jfif" class="card-img-top" alt="porsche">
                            <div class="card-body">
                            <p class="card-text">The Porsche 939 is a rare 1980s conversion, featuring a hybrid design
                                that combined a sloping nose with pop-up headlights.</p></div></div>`;
    parent.appendChild(newParagraph1);
    parent.appendChild(newParagraph2);
    parent.appendChild(newParagraph3);
    courses.outerHTML = `<br><h5>Below is a list of the discontinued products:</h5><br>`;
})

textColor.addEventListener('click', function() {
    mission.classList.add('red');
})

react.addEventListener('click', function() {
    window.location.href = "contact/contact.html"
})

