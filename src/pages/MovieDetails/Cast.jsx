import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../components/API/API';
import { AdditionalStyled, ListItem } from "./MovieDetails.styled";
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/App.styled';
import image from './else.jpg';

const Cast = () => {

  const { movieId } = useParams();
  const [infos, setInfos] = useState(null);
  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);


  useEffect(() => {

    async function fetchInfoCast () {
      setIsLoading('true');
      try {
        await getMovieCredits(movieId).then(responce => {
            if (!responce.cast) {
              return Promise.reject(new Error('No information about!'))
            }
          setInfos(responce.cast);
          setIsLoading('false');});
        } catch(error) {
          setError(error);
        }
      }
      fetchInfoCast ()

    }, [movieId]);

  if (!infos) {
    return null;
  }

  return (
    <>       
    {(isLoading === 'true') && <Loader/>}
    {(error !== null) && <ErrorMessage>{error.message}</ErrorMessage>}
    <AdditionalStyled>
    {Object.values(infos).map(({ profile_path, name, id }) => 
      <ListItem key={id}>
        <img src={(!profile_path) ? image : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} width="200" />
        <p>{name}</p>
      </ListItem>
    )}
    </AdditionalStyled>
    </>);
    
};

export default Cast;