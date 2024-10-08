import { useDispatch } from 'react-redux';
import MyCard from '../components/Card';
import PageDefault from '../config/layout/PageDefault';
import { useEffect } from 'react';
import { getCharacters } from '../store/models/CharacterSlice';
import { useAppSelector } from '../store/hooks';

function Home() {
  const dispatch = useDispatch();
  const selector = useAppSelector(state => state.harrypotter.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  console.log(selector);

  return (
    <PageDefault>
      <MyCard data={selector} />
    </PageDefault>
  );
}

export default Home;
