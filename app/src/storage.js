import initialMovies from './movie-data.json';
import { storageKey } from './utils.js';

export const setMovies = (value) => {
    localStorage.setItem(storageKey, JSON.stringify(value));
};

export const getMovies = () => {
    return JSON.parse(localStorage.getItem(storageKey));
};

export const resetMovies = () => {
    setMovies(initialMovies);
};

export const initializeMovies = () => {
    const storedMovies = getMovies();

    if (!storedMovies) {
        setMovies(initialMovies);
        return initialMovies;
    }

    return storedMovies;
};

export const updateMovies = (newMovie) => {
    const movies = getMovies();

    movies.push(newMovie);

    setMovies(movies);
};
