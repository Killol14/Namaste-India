const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementsByClassName('.menu');

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);