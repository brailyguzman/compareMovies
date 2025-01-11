import { renderMovie } from './render.js';
import { initializeMovies } from './storage.js';
import './events.js';
import './style.css';

const movies = initializeMovies();

movies.forEach((movie, index) => {
    renderMovie(movie, index);
});
