import { renderMovie } from './render.js';
import { initializeMovies } from './storage.js';
import './events.js';

const movies = initializeMovies();

movies.forEach((movie, index) => {
    renderMovie(movie, index);
});
