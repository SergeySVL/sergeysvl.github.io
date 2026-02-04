
let x = 10;
let y = 10;

window.addEventListener('load', drawTable(10, 10));

function drawTable (height, width) {
    let HTML = '<table class="table table-success table-striped table-bordered"><thead><tr><th scope="col">#</th>'
    for (let i = 1; i <= width; i++) {
        if (i == width) {
            HTML += `<th scope="col">${i}</th></tr></thead>`;
        } else {
            HTML += `<th scope="col">${i}</th>`;        
        }
    }
    HTML += '<tbody>';
    for (let j = 1; j <= height; j++) {
        HTML += `<tr><th scope="row">${j}</th>`;
        for (let i = 1; i <= width; i++) {
            HTML += `<td>${i*j}</td>`;
        }
        if (j == height) {
            HTML += `</tr></tbody></table>`;
        }
    }
    document.getElementById('table-container').innerHTML = HTML;
}

document.getElementById("floatingRows").onchange = () => {
    if  (document.getElementById("floatingRows").value <= 0 || document.getElementById("floatingRows").value > 10) { 
        document.getElementById("error").innerHTML = '<div class="alert alert-primary" role="alert">Please enter a number between 0 and 11</div>';
    } else {        
        x = document.getElementById("floatingRows").value;
        drawTable(x, y);
        document.getElementById("error").innerHTML = "";
}}

document.getElementById("floatingColumns").onchange = () => {
    if  (document.getElementById("floatingColumns").value <= 0 || document.getElementById("floatingColumns").value > 10) { 
        document.getElementById("clmError").innerHTML = '<div class="alert alert-primary" role="alert">Please enter a number between 0 and 11</div>';
    } else {        
        y = document.getElementById("floatingColumns").value;
        drawTable(x, y);
        document.getElementById("clmError").innerHTML = "";
}}

document.getElementById("button").onclick = () => {
    drawTable(10, 10);
    document.getElementById("error").innerHTML = "";
    document.getElementById("clmError").innerHTML = "";
}




