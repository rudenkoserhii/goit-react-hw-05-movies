import { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../API/API';
import { MovieDetailsStyled, LinkStyled, Wrap, WrapSecond, Title, TitleSecond } from "./MovieDetails.styled";
import { Outlet } from "react-router-dom";
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../App.styled';
import image from './else.jpg';


const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {

    async function fetchMovie () {
      setIsLoading('true');
      try {
        await getMovieDetails(movieId).then(responce => {
          setMovie(responce);
          setIsLoading('false');
});
      } catch(err) {
       setError(err);
    }
    }
      fetchMovie ()

  }, [movieId]);


  if (!movie) {
    return null;
  }

  const { title, name, release_date, genres, overview, vote_average, poster_path, tagline } = movie;

  return (
    <>
      {(error !== null) && <ErrorMessage>{error.message}</ErrorMessage>}
      {(isLoading === 'true') && <Loader/>}
    <MovieDetailsStyled>
    <LinkStyled onClick={() => navigate(-1, {replace: true}) || navigate('/', {replace: true})}>Go back</LinkStyled>
    <Wrap>
      <img src={(!poster_path) ? image : `https://image.tmdb.org/t/p/w300${poster_path}`} alt={tagline} width="300"/>
        <WrapSecond>
          <Title>{ title??name }
            <span>{ (release_date) && ` (${new Date(release_date).getFullYear()})`}</span>
          </Title>
          <p>
            <b>User score:</b>{` ${Math.ceil(Number(vote_average)*10)}%`}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
          </p>
      </WrapSecond>
    </Wrap>
    <TitleSecond>Additional information</TitleSecond>
    <ul>
      <li>
        <LinkStyled to="cast" relative='route'>Cast</LinkStyled>
      </li>
      <li>
        <LinkStyled to="reviews" relative='route'>Reviews</LinkStyled>
      </li>
    </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MovieDetailsStyled></>);
};

export default MovieDetails;