import { renderCharts, renderMovie } from './render.js';
import { resetMovies, updateMovies } from './storage.js';

document
    .getElementById('movies-default-button')
    .addEventListener('click', () => {
        resetMovies();

        const customMovies = document.querySelectorAll('.custom-movie');

        for (const customMovie of customMovies) {
            customMovie.remove();
        }

        renderCharts();
    });

document.getElementById('add-movie-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    data.custom = true;

    const index = document.querySelectorAll('.movie').length;

    // Index starts at 0 so the current length should give us the correct index for this movie render.
    renderMovie(data, index, true);
    updateMovies(data);
    renderCharts();

    e.target.reset();
});
