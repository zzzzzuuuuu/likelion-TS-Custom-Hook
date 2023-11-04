import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Content from './Content';
import { getMovieList } from './Api';

interface ListItem {
  option: string;
  listText: string;
}

const List = ({ option, listText }: ListItem) => {
  const [movies, setMovies] = useState<[]>();

  const fetchData = async (option: string) => {
    setMovies(await getMovieList({ option }));
  };

  useEffect(() => {
    fetchData(option);
  }, [option]);

  return (
    <>
      <ListText>{listText}</ListText>
      <ListBlock>
        {movies &&
          movies.map((movie, index) => (
            <Content key={index} content={movie} rank={index} />
          ))}
      </ListBlock>
    </>
  );
};

export default List;

const ListBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const ListText = styled.h2`
  padding-left: 8px;
  margin-top: 48px;
  margin-bottom: 2px;
`;
