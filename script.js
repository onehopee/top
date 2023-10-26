const query = document.getElementById('query');
query.addEventListener('keyup', e => {
let currentValue = e.target.value.toLowerCase();
let movieNames = document.querySelectorAll('h3');
movieNames.forEach(movieName => {
    if (movieName.textContent.toLowerCase().includes(currentValue)) {
        movieName.parentNode.parentNode.style.display = 'block';
} else {
        movieName.parentNode.style.display = 'none';
}
})
});
