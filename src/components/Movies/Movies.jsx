import { useState, useEffect } from 'react';
import { Searchbar } from '../SearchForm/SearchForm';
import { searchMovies } from '../API/API';
import { Link } from "react-router-dom"
import { MoviesListStyled, TitleMovie, ListItem, Img } from "./Movies.styled"
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../App.styled';
import image from '../MovieDetails/else.jpg';





export const Movies = () => {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);

  useEffect( () => {

    async function getMoviesBySearch () {
      if (!query) {
        return;
      }

      setIsLoading('true');
      try {
      await searchMovies(query).then(responce => {
          if (responce.total_results === 0) {
            return Promise.reject(new Error(`No movies with word "${query}"`))
          }
            setMovies(p=>(p = responce.results));
            setIsLoading('false');

        })} catch(error) {
          setError(error);
      }
    };
    
    getMoviesBySearch ();
  }, [query]);

  const onSubmit = (value) => {
    setQuery(value);
  }

    return (
        <>
        <Searchbar onSubmit={onSubmit} />
        <MoviesListStyled>
            {movies.map(({ title, id, name, poster_path, tagline }) => 
            <ListItem key={id}>
              <Link to={`${id}`}>
<TitleMovie>{title??name}</TitleMovie><Img src={(!poster_path) ? image : `https://image.tmdb.org/t/p/w200${poster_path}`} alt={tagline} width="200"/></Link>
            </ListItem>)}
        </MoviesListStyled>
        {(isLoading === 'true') && <Loader/>}
        {(error !== null) && <ErrorMessage>{error.message}</ErrorMessage>}
        </>
)};
