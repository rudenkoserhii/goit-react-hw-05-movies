import { useState, useEffect } from 'react';
import { getTrending } from '../API/API';
import { Link } from "react-router-dom";
import { MoviesListStyled, Title, TitleMovie, ListItem, Img } from "../Movies/Movies.styled";
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../App.styled';
import image from '../MovieDetails/else.jpg';




const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState('false');
    const [error, setError] = useState(null);


  useEffect( () => {

    async function fetchMovies () {

      setIsLoading('true');
      try {
      await getTrending()
        .then(responce => {
          if (responce.total_results === 0) {
            return Promise.reject(new Error('No such Movie!'))
          }
            setMovies(responce.results);
            setIsLoading('false');
        })} catch(error) {
          new Error();
          setError(error);
        }
      };

    fetchMovies ()
  }, []);

  if (!movies) {
    return null;
  }

  

    return (
        <>
        <Title>Trending list</Title>
        <MoviesListStyled>
            {movies.map(({ title, id, name, poster_path, tagline }) => 
            <ListItem key={id}>
              <Link to={`movies/${id}`} relative="path">
                <TitleMovie>{title??name}</TitleMovie>
                <Img src={(!poster_path) ? image : `https://image.tmdb.org/t/p/w200${poster_path}`} alt={tagline} width="200"/>
              </Link>
            </ListItem>)}
        </MoviesListStyled>
        {(isLoading === 'true') && <Loader/>}
        {(error !== null) && <ErrorMessage>{error.message}</ErrorMessage>}
        </>
    )
}

export default HomePage;