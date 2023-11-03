import styled from 'styled-components';
import List from './List';

const categories = [
  {
    name: 'now_playing',
    text: '박스 오피스 순위',
  },
  {
    name: 'popular',
    text: 'Top 인기 작품',
  },
  {
    name: 'top_rated',
    text: '평균 별점이 높은 작품',
  },
  {
    name: 'upcoming',
    text: '출시 예정작',
  },
];

const Movies = () => {
  return (
    <>
      <MoviesBlock>
        {categories.map((category) => (
          <List
            key={category.name}
            option={category.name}
            listText={category.text}
          />
        ))}
      </MoviesBlock>
    </>
  );
};

export default Movies;

const MoviesBlock = styled.div`
  margin: 96px 48px;
`;
