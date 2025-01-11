import { renderMovie } from './render.js';
import { initializeMovies } from './storage.js';
import './events.js';
import './style.css';

const movies = initializeMovies();
for (const movie of movies) {
    renderMovie(movie);
}
