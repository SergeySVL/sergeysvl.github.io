
const greeting = document.querySelector('.greeting');
const courses = document.getElementById('courses');
const textColor = document.getElementById('textColor');
const mission = document.querySelector('.mission');
const react = document.getElementById('react');

let intervalId;

document.addEventListener("load", greetUser());

function greetUser() {
    alert("Greetings, visitor!");
    let name = prompt('Please enter your name: ');
    alert(`Great to see you, ${name}!`);
    greeting.innerHTML = `<h1><i class="bi bi-chat-dots"></i>&nbsp;&nbsp;&nbsp;Look at who is here! Welcome, 
                            ${name}!</h1>
                            <h6>!!!===============================!!!</h6>`;
    greeting.classList.add('align-center', 'darkorange');
}

courses.addEventListener('click', function() {
    const parent = document.getElementById('current');
    let newParagraph = document.createElement('ul');
    newParagraph.innerHTML = `
                <li>COMP-100 --- Programming 1</li>
                <li>COMP-120 --- Software Engineering Fundamentals</li>
                <li>COMP-213 --- Web Interface Design</li>
                <li>GNED-127 --- Personal Finance: Get Smart!</li>
                <li>MATH-175 --- Functions and Number Systems</li>
                <li>COMM-171 --- College Communication 2</li>`;
    parent.appendChild(newParagraph);
    courses.outerHTML = `<h5>Below is a list of my courses from Semester 1:</h5>`;
})

textColor.addEventListener('click', function() {
    const colors = ['red', 'red1', 'red2', 'red3', 'red4'];
    let a = Math.floor(Math.random() * 5);
    mission.classList.replace('red', colors[a]);
    let prev_color = colors[a];
    intervalId = setInterval(() => {
        let b = Math.floor(Math.random() * 5);
        mission.classList.replace(prev_color, colors[b]);
        prev_color = colors[b];
    }, 100);
    setTimeout(() => {
        clearInterval(intervalId);
        mission.classList.replace(prev_color, 'red1');
    }, 10000);
})

react.addEventListener('click', function() {
    react.outerHTML = `<h5><i class="bi bi-fire"></i>&nbsp;&nbsp;&nbsp;REACT Added!</h5>`;
    const par = document.getElementById('list');
    let newPar = document.createElement('li');
    newPar.innerHTML = `React`;
    newPar.classList.add('slide-in');
    par.prepend(newPar);
    setTimeout(() => {
        newPar.classList.remove('slide-in');
    }, 5300);
})

