import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['api_key'] = process.env.REACT_APP_MOVIE_API_KEY;

export const getTrending = async () => {
    const response = await axios.get('trending/get-trending');
    return response.data;
};

export const searchMovies = async value => {
    axios.defaults.headers.common['query'] = value;
    const response = await axios.get('search/movie');
    return response.data;
};

export const getMovieDetails= async movieId => {
    const response = await axios.get(`movie/${movieId}`);
    return response.data;
};

export const getMovieCredits= async movieId => {
    const response = await axios.get(`movie/${movieId}/credits`);
    return response.data;
};

export const getMovieReviews= async movieId => {
    const response = await axios.get(`movie/${movieId}/reviews`);
    return response.data;
};


///trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.






// const APIKEY = '30180377-fac51c2acf971fb8cf8c6aeca';
// const URL = `https://pixabay.com/api/?&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`;


// async function fetchAPI (currentPage, nextValue) {

//     return await fetch(`${URL}&page=${currentPage}&q=${nextValue}`)
//         .then(response => {
//         if (response.ok) {
//         return response.json();
//         }
//         return Promise.reject(new Error('Error'));
//         })

// }

// export default fetchAPI;