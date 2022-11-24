import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../components/API/API';
import { AdditionalStyled, Text, ListItem } from "./MovieDetails.styled";
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/App.styled';



const Reviews = () => {

  const { movieId } = useParams();
  const [infos, setInfos] = useState(null);
  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);



  useEffect(() => {

    async function fetchInfoReview () {
      setIsLoading('true');
      try {
        await getMovieReviews(movieId).then(responce => {
            if (responce.total_results === 0) {
              return Promise.reject(new Error('No information about!'))
            }
          setInfos(responce.results);
          setIsLoading('false');
        });
      } catch(error) {
          setError(error);
        }
    }
    fetchInfoReview ()

  }, [movieId]);

  if (!infos) {
    return null;
  }

  return (
    <>       
    {(isLoading === 'true') && <Loader/>}
    {(error !== null) && <ErrorMessage>{error.message}</ErrorMessage>}
    <AdditionalStyled>
        { (infos !== null) ?
(Object.values(infos).map(({ content, author, id }) => <ListItem key={id}><p><b>Author:</b> {author}</p><Text>{content}</Text></ListItem>)) : (<p>No information about!</p>)}
    </AdditionalStyled>
    </>);
};

export default Reviews;