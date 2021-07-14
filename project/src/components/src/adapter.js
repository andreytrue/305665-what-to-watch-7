export const FilmsAdapter = (data) => {
  const films = JSON.parse(JSON.stringify(data));

  const adaptedList = films.map((item) => {
    const result = Object.assign({
      posterImage: item.poster_image,
      previewImage: item.preview_image,
      backgroundImage: item.background_image,
      backgroundColor: item.background_color,
      videoLink: item.video_link,
      previewVideoLink: item.preview_video_link,
      scoresCount: item.scores_count,
      runTime: item.run_time,
      isFavorite: item.is_favorite,
    }, item);

    delete result.poster_image;
    delete result.preview_image;
    delete result.background_image;
    delete result.background_color;
    delete result.video_link;
    delete result.preview_video_link;
    delete result.scores_count;
    delete result.run_time;
    delete result.is_favorite;

    return result;
  });

  return adaptedList;
};
