export const TMBD_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${[process.env.EXPO_PUBLIC_MOVIE_API_KEY]}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.des`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMBD_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch mvoies", response.statusText);
  }

  const data = await response.json();

  return data.results;
};

// const url = "https://api.themoviedb.org/3/keyword/keyword_id/movies";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjU3OGRkYTZmNTIwMzkzMTYxZWVjYzI4YzFjZWMxYSIsIm5iZiI6MTc3Mjk0ODIzNy41ODYsInN1YiI6IjY5YWQwYjBkOTE3ZDZjYzhjZmRkMjczYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WIm2DOiMYtMvJVimypPWFZznVgXzOVg93BDJWkx7l18",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
