function createMovieCard(movie) {
  const col = document.createElement('div');
  col.className = 'col-sm-6 col-md-4 col-lg-3';

  const card = document.createElement('article');
  card.className = `card card-movie h-100${movie.favorite ? ' movie-favorite' : ''}`;

  const image = document.createElement('img');
  image.src = movie.posterUrl || movie.poster || '../../assets/anatomy.jpg';
  image.className = 'card-img-top movie-poster';
  image.alt = movie.title;

  const body = document.createElement('div');
  body.className = 'card-body d-flex flex-column';

  const title = document.createElement('h5');
  title.className = 'card-title mb-1';
  title.textContent = movie.title;

  const year = document.createElement('p');
  year.className = 'card-text text-muted mb-0';
  year.textContent = movie.year ?? '';

  body.append(title, year);
  card.append(image, body);
  col.appendChild(card);
  return col;
}

function renderMovies(list, containerSelector = '#movies') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.replaceChildren(...list.map(createMovieCard));
}

window.createMovieCard = createMovieCard;
window.renderMovies = renderMovies;
