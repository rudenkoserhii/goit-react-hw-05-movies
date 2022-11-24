import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
    },
  });


export const getTrending = async () => {
    const response = await axiosInstance.get('trending/all/day');
    return response.data;
};

export const searchMovies = async value => {
    const response = await axiosInstance.get(`search/movie?query=${value}`);
    return response.data;
};

export const getMovieDetails= async movieId => {
    const response = await axiosInstance.get(`movie/${movieId}`);
    return response.data;
};

export const getMovieCredits= async movieId => {
    const response = await axiosInstance.get(`movie/${movieId}/credits`);
    return response.data;
};

export const getMovieReviews= async movieId => {
    const response = await axiosInstance.get(`movie/${movieId}/reviews`);
    return response.data;
};
