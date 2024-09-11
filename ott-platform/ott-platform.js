document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        { title: "Inception", img: "https://image.tmdb.org/t/p/w500/cKE9q8gXBsvwK2bTEjXbZ6pITUB.jpg" },
        { title: "Interstellar", img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
        { title: "The Dark Knight", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
        { title: "Avatar", img: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg" }
    ];

    const shows = [
        { title: "Breaking Bad", img: "https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg" },
        { title: "Stranger Things", img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
        { title: "Game of Thrones", img: "https://image.tmdb.org/t/p/w500/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg" },
        { title: "The Witcher", img: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLzmxMNGcGzFq.jpg" }
    ];

    const movieContainer = document.getElementById("movies");
    const showContainer = document.getElementById("shows");

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieContainer.appendChild(movieElement);
    });

    shows.forEach(show => {
        const showElement = document.createElement("div");
        showElement.classList.add("show");
        showElement.innerHTML = `
            <img src="${show.img}" alt="${show.title}">
            <h3>${show.title}</h3>
        `;
        showContainer.appendChild(showElement);
    });
});
