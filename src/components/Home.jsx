import axios from "axios";
import { useEffect, useState } from "react";
import CharactersContainer from "./CharactersContainer"
import Loading from "./Loading";
import Header from './Header';
import '../stylesheets/home.scss';

//functional component Home
export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [homeFilter, setHomeFilter] = useState('all');
  const [alphaOrder, setAlphaOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //function to fetch data from API
  const getAllCharacters = () => {
    setIsLoading(true);
    axios.get(`${process.env.REACT_APP_API_END_POINT}/characters`)
      .then((res) => {
        setCharacters(res.data)
        setFilteredCharacters(res.data)
      }).catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false)
      });
  }
  useEffect(() => {
    getAllCharacters();
  }, [])

  // Filter by name and house. Order name with alpha order. If value of house is all, then show all characters.
  const getFilteredCharacters = () => {
    return characters.filter(character => {
      if (nameFilter.length > 0) {
        return character.name.toLowerCase().includes(nameFilter.toLowerCase())
      }
      if (homeFilter !== 'all') {
        return character.house === homeFilter
      }
      return true;
    }
    ).sort((a, b) => {
      if (alphaOrder) {
        return a.name.localeCompare(b.name)
      }
      return b.name.localeCompare(a.name)
    })
  }

  useEffect(() => {
    setFilteredCharacters(getFilteredCharacters());
    // eslint-disable-next-line
  }, [nameFilter, homeFilter, alphaOrder])


  return (
    <>
      <Header nameFilter={nameFilter} setNameFilter={setNameFilter} homeFilter={homeFilter} setHomeFilter={setHomeFilter} alphaOrder={alphaOrder} setAlphaOrder={setAlphaOrder} />
      {isLoading ? <Loading /> : filteredCharacters.length > 0 ? <CharactersContainer characters={filteredCharacters} /> : <h1>No characters found</h1>}
    </>
  );
}

export default Home;