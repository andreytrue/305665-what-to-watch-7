export const useSelectedFilmAdapter = (data) => {
  const film = {
    id: data.id,
    name: data.name,
    posterImage: data.poster_image,
    previewImage: data.preview_image,
    backgroundImage: data.background_image,
    backgroundColor: data.background_color,
    videoLink: data.video_link,
    previewVideoLink: data.preview_video_link,
    description: data.description,
    rating: data.rating,
    scoresCount: data.scores_count,
    director: data.director,
    starring: data.starring,
    runTime: data.run_time,
    genre: data.genre,
    released: data.released,
    isFavorite: data.is_favorite,
  };

  return film;
};

export const useFilmsAdapter = (data) => {
  const films = JSON.parse(JSON.stringify(data));

  const adaptedList = films.map((item) => ({
    id: item.id,
    name: item.name,
    posterImage: item.poster_image,
    previewImage: item.preview_image,
    backgroundImage: item.background_image,
    backgroundColor: item.background_color,
    videoLink: item.video_link,
    previewVideoLink: item.preview_video_link,
    description: item.description,
    rating: item.rating,
    scoresCount: item.scores_count,
    director: item.director,
    starring: item.starring,
    runTime: item.run_time,
    genre: item.genre,
    released: item.released,
    isFavorite: item.is_favorite,
  }));

  return adaptedList;
};
