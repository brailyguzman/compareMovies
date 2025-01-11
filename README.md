# Compare Movies (with Chart.js)

## User Stories
As with all projects, the best place to start is to figure out what a user can and cannot do on your site. Here are all the user stories for this project:

A user:
- Can see a list of movies on the page on load
- Can use a form to add a new movie
- Cannot submit the form without all the fields filled out
- Can see the new movie added to the list
- Can click a button to reset the movies back to the original ~30 movies
- Can see a bar chart of the movies sorted by domestic gross
- Can see a second chart of data
- Can see a third chart of data
- Can interact with the charts to reveal more information (like through a tooltip)

## Layout: Structure
- [x] There is a single `main` element on the page
- [x] There is a single `h1` element on the page
- [x] There is a `form`
- [x] The form has an `h2` label
- [x] The form has an `text` input and label for the movie title
- [x] The form has an `number` input and label for the movie's critic score
- [x] The form has an `number` input and label for the movie's audience score
- [x] The form has an `number` input and label for the movie's domestic gross
- [x] The form has a `select` input and label for the movie's genre with options:
  - ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Concert', 'Documentary', 'Musical', 'Romance', 'Sci-Fi', 'Thriller']
- [x] The `select` input starts with "Select a genre" with *no* value
- [x] Every single input on the form is required in the html
- [x] The form has a `button` to submit the form
- [x] There is an `h2` showing for every section of the page
- [x] There are actual `section` tags to denote each section
- [x] There is a `button` under the `ul` to reset the movies to the default movies
- [x] The movies are each in `li` elements inside a `ul` element
- [x] The movies are displayed in a grid-like pattern (flex or grid)
- [x] There is a bar chart using Chart.js
- [x] There is a second chart using Chart.js
- [ ] There is a third chart using Chart.js

## layout: Accessibility
- [x] The form has an `aria-label` or `aria-labelledby` attribute that describes the form
- [x] Each section has an `aria-label` or `aria-labelledby` attribute that describes the section
- [x] There are no instances of recreating any semantic elements
- [x] There is a tab index on the scrollable movies section
- [x] Each movie card has an `h3` with the movies title so they can easily be identified and navigated to by screen readers

## Functionality
- [x] Every form field is required, and the form cannot be submitted without them
- [x] Clicking the form submit button does not reload the page because the default behavior is prevented
- [x] Clicking the form submit button creates a new movie in the movies section
- [x] Clicking the form submit button clears the form
- [x] When a movie is added, all charts are rerendered to show the new movie
- [x] At least one chart has a modified tooltip display
- [x] Clicking the reset button removes all user added movies and resets the movies to the default list
- [x] The movies are saved to localStorage
- [x] The movies are loaded from localStorage on page load

## Meta
- [x] The project is created using Vite
- [x] The code exists in more than one JS file
- [x] The project is deployed via GitHub Pages properly
- [x] The `movie-data.json` file is read properly
- [x] css flexbox or grid was used
- [x] The code does not render unescaped text directly to the DOM (`createElement`` or other escape method used)
- [x] `.innerHTML` or `createElement/.append` is used properly at some point in the project
- [x] `.innerHTML` or `.remove()` is used to delete elements from the DOM.


