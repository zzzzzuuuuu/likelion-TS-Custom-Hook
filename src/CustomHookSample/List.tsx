import styled from 'styled-components';
import Content from './Content';
import { CategoryName } from './Movies';
import useAxios from './Hooks/useHooks';
interface ListItem {
  option: CategoryName;
  listText: string;
}


const List = ({ option, listText }: ListItem) => {
  const { data, loading } = useAxios({url:`https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1
`});

  if (!data || loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <ListText>{listText}</ListText>
      <ListBlock>
        {data &&
          data.map((movie, index) => (
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
