let movies = Array.isArray(window.initialMovies)
  ? window.initialMovies.slice()
  : [];

document.addEventListener('DOMContentLoaded', () => {
  renderMovies(movies);

  const form = document.getElementById('movie-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('title').value.trim();
      const year = document.getElementById('year').value.trim();
      const poster = document.getElementById('poster').value.trim();
      if (!title) return;
      const movie = Movie.fromForm({ title, year: year || '', poster: poster || '' });
      movies.push(movie);
      renderMovies(movies);
      form.reset();
    });
  }
});
