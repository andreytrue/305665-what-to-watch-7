export const ActionType = {
  GENRE_CHANGE: 'genres/genreChange',
  RESET_GENRE: 'genres/genreReset',
};

export const ActionCreator = {
  genreChange: (genre) => ({
    type: ActionType.GENRE_CHANGE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
};
