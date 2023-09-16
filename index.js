document.addEventListener("DOMContentLoaded", function () {
    // Dummy movie data
    const movies = [
        { title: "Movie 1", genre: "Action" },
        { title: "Movie 2", genre: "Comedy" },
        // Add more movies here
    ];

    // Dummy user preferences
    const userPreferences = {
        "Action": 5,
        "Comedy": 3,
    };

    // Function to display movies
    function displayMovies() {
        const moviesDiv = document.getElementById("movies");
        moviesDiv.innerHTML = "";

        movies.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");
            movieElement.innerHTML = `<strong>${movie.title}</strong> (${movie.genre})`;
            moviesDiv.appendChild(movieElement);
        });
    }

    // Function to display user preferences
    function displayUserPreferences() {
        const preferencesDiv = document.getElementById("preferences");
        preferencesDiv.innerHTML = "";

        for (const genre in userPreferences) {
            const preferenceElement = document.createElement("div");
            preferenceElement.innerHTML = `<strong>${genre}:</strong> ${userPreferences[genre]}`;
            preferencesDiv.appendChild(preferenceElement);
        }
    }

    // Function to add a movie
    function addMovie(title, genre) {
        movies.push({ title, genre });
        displayMovies();
    }

    // Function to search for movies
    function searchMovies(query) {
        const results = movies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase())
        );
        displaySearchResults(results);
    }

    // Function to display search results
    function displaySearchResults(results) {
        const moviesDiv = document.getElementById("movies");
        moviesDiv.innerHTML = "";

        results.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");
            movieElement.innerHTML = `<strong>${movie.title}</strong> (${movie.genre})`;
            moviesDiv.appendChild(movieElement);
        });
    }

    // Handle form submissions
    const addMovieForm = document.getElementById("add-movie-form");
    const searchForm = document.getElementById("search-form");

    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const movieTitle = document.getElementById("movie-title").value;
        const movieGenre = document.getElementById("movie-genre").value;
        addMovie(movieTitle, movieGenre);
    });

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchQuery = document.getElementById("search-query").value;
        searchMovies(searchQuery);
    });

    // Initial display
    displayMovies();
    displayUserPreferences();
});
