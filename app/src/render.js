import { formatCurrency } from './utils.js';

export const renderMovie = (movie, index, custom) => {
    const { criticScore, audienceScore, domestic, genre, title } = movie;

    const moviesUl = document.getElementById('movies-list');

    const movieLi = document.createElement('li');
    movieLi.tabIndex = index;

    movieLi.classList.add('movie');

    if (custom) {
        movieLi.classList.add('custom-movie');
    }

    const movieTitle = document.createElement('h3');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = title;

    const movieCritic = document.createElement('p');
    movieCritic.classList.add('movie-critic');
    movieCritic.textContent = `Critic Score: ${criticScore}%`;

    const movieAudience = document.createElement('p');
    movieAudience.classList.add('movie-audience');
    movieAudience.textContent = `Audience Score: ${audienceScore}%`;

    const movieDomestic = document.createElement('p');
    movieDomestic.classList.add('movie-domestic');
    movieDomestic.textContent = `Domestic Total: ${formatCurrency.format(
        domestic
    )}`;

    const movieGenre = document.createElement('p');
    movieGenre.classList.add('movie-genre');
    movieGenre.textContent = `Genre: ${genre}`;

    movieLi.append(
        movieTitle,
        movieCritic,
        movieAudience,
        movieDomestic,
        movieGenre
    );

    moviesUl.appendChild(movieLi);
};
