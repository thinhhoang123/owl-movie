export const TMDBImage = (imgUrl: string) => {
  const { VITE_TMDB_IMAGE } = import.meta.env;
  return `${VITE_TMDB_IMAGE}${imgUrl}`;
};
