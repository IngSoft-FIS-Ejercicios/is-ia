class Movie {
  constructor({ id, title, year = '', poster = '', favorite = false } = {}) {
    this.id = id ?? Date.now();
    this.title = title?.trim() ?? '';
    this.year = year;
    this.poster = poster;
    this.favorite = favorite;
  }

  get posterUrl() {
    return this.poster || '../../assets/no.jpg';
  }

  static fromForm({ title, year, poster }) {
    return new Movie({ title, year, poster });
  }
}

window.Movie = Movie;
