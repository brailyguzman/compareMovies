import { resetMovies, updateMovies } from './storage.js';

document
    .getElementById('movies-default-button')
    .addEventListener('click', () => {
        resetMovies();

        const customMovies = document.querySelectorAll('.custom-movie');

        for (const customMovie of customMovies) {
            customMovie.remove();
        }
    });

document.getElementById('add-movie-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    data.custom = true;

    renderMovie(data, true);
    updateMovies(data);

    e.target.reset();
});

document
    .getElementById('movie-domestic-input')
    .addEventListener('change', (e) => {});
