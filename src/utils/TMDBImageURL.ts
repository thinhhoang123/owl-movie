export const TMDBImageURL = (imgUrl: string) => {
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${imgUrl}`;
};
