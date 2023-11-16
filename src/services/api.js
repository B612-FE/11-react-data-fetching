import axios from "axios";

const fetchData = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export const PreviewsAPI = async () =>
  await fetchData(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

export const PopularAPI = async () =>
  await fetchData(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

export const TopRatedAPI = async () =>
  await fetchData(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );

export const UpcomingAPI = async () =>
  await fetchData(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );

export const DetailAPI = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
