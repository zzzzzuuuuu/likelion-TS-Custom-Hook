import axios from 'axios';
import { GetMoviesPayload, Movie } from '../GetMoviesPayload';
interface GetMovieListProps {
  option: string
}


export const getMovieList = async ({ option }: GetMovieListProps): Promise<Movie[]> => {
    const res = await axios.get<GetMoviesPayload>(
      `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    console.log(res);
    const link = document.location.href;
    console.log(typeof(link));
    return res.data.results;
};
