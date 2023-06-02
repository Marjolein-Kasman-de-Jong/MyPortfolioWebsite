// Shows image credits on hover over info symbol 

let infoSymbol = document.getElementById('infosymbol1');
let creditToShow = document.getElementById('image1credit');

function showCredits() {
    creditToShow.style.visibility = 'visible';
}

function hideCredits() {
    creditToShow.style.visibility = 'hidden';
}

infoSymbol.addEventListener('mouseover', showCredits);
infoSymbol.addEventListener('mouseleave', hideCredits);

// Displays content section 3

let overMij = document.getElementById('overmij');
let werkervaring = document.getElementById('werkervaring');
let opleiding = document.getElementById('opleiding');
let cursussen = document.getElementById('cursussen');

let chooseOverMij = document.getElementById('li1');
let chooseWerkervaring = document.getElementById('li2');
let chooseOpleiding = document.getElementById('li3');
let chooseCursussen = document.getElementById('li4');

function showOverMij() {
    overMij.style.display = 'block';
    werkervaring.style.display = 'none';
    opleiding.style.display = 'none';
    cursussen.style.display = 'none';

    chooseOverMij.style.backgroundColor = 'white';
    chooseWerkervaring.style.backgroundColor = '#e8532600';
    chooseOpleiding.style.backgroundColor = '#e8532600';
    chooseCursussen.style.backgroundColor = '#e8532600';
}

function showWerkervaring() {
    overMij.style.display = 'none';
    werkervaring.style.display = 'block';
    opleiding.style.display = 'none';
    cursussen.style.display = 'none';

    chooseOverMij.style.backgroundColor = '#e8532600';
    chooseWerkervaring.style.backgroundColor = 'white';
    chooseOpleiding.style.backgroundColor = '#e8532600';
    chooseCursussen.style.backgroundColor = '#e8532600';
}

function showOpleiding() {
    overMij.style.display = 'none';
    werkervaring.style.display = 'none';
    opleiding.style.display = 'block';
    cursussen.style.display = 'none';

    chooseOverMij.style.backgroundColor = '#e8532600';
    chooseWerkervaring.style.backgroundColor = '#e8532600';
    chooseOpleiding.style.backgroundColor = 'white';
    chooseCursussen.style.backgroundColor = '#e8532600';
}

function showCursussen() {
    overMij.style.display = 'none';
    werkervaring.style.display = 'none';
    opleiding.style.display = 'none';
    cursussen.style.display = 'block';

    chooseOverMij.style.backgroundColor = '#e8532600';
    chooseWerkervaring.style.backgroundColor = '#e8532600';
    chooseOpleiding.style.backgroundColor = '#e8532600';
    chooseCursussen.style.backgroundColor = 'white';
}

chooseOverMij.addEventListener('click', showOverMij);
chooseWerkervaring.addEventListener('click', showWerkervaring);
chooseOpleiding.addEventListener('click', showOpleiding);
chooseCursussen.addEventListener('click', showCursussen);

// Calculates offset from #target

let vh = window.innerHeight / 100;

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - (13 * vh));
});