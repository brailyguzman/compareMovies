import { getMovies } from './storage.js';
import { formatCurrency } from './utils.js';
import Chart from 'chart.js/auto';

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

const renderBarChart = (parentElement, movies) => {
    parentElement.innerHTML = ``;

    const canvas = document.createElement('canvas');
    canvas.className = 'chart';

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: movies.map((movie) => movie.title),
            datasets: [
                {
                    label: 'Domestic Gross',
                    data: movies.map((movie) => movie.domestic),
                },
            ],
        },
    });

    parentElement.append(canvas);
};

const renderDoughnutChart = (parentElement, movies) => {
    console.log('trying to render doughnut...');
    parentElement.innerHTML = ``;

    const canvas = document.createElement('canvas');
    canvas.className = 'chart';

    const genresFreq = {};

    movies.forEach((movie) => {
        let genreCount = genresFreq[movie.genre];

        if (!genreCount) {
            genreCount = 1;
        } else {
            genreCount++;
        }

        genresFreq[movie.genre] = genreCount;
    });

    const data = {
        labels: Object.keys(genresFreq),
        datasets: [
            {
                data: Object.keys(genresFreq).map((key) => genresFreq[key]),
                hoverOffset: 4,
            },
        ],
    };

    new Chart(canvas, {
        type: 'doughnut',
        data: data,
    });

    parentElement.append(canvas);
};

export const renderCharts = (movies) => {
    const barChartSection = document.getElementById(
        'bar-chart-section-container'
    );

    const doughnutChartSection = document.getElementById(
        'doughnut-chart-section-container'
    );

    renderBarChart(barChartSection, movies);
    renderDoughnutChart(doughnutChartSection, movies);
};
