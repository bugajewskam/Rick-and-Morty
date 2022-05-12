import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import CharactersPage from "./pages/CharactersPage";
import FavouritePage from "./pages/FavouritePage";
import SearchAppBar from './components/app-bar';
import { data } from './data/mock';
import { Character } from './interface/character';

export const FavouriteContext = React.createContext({ filterList: [] as Character[], favourites: [] as number[], addFavourite(id: number) { }, removeFavourite(id: number) { } });
function App() {
  const [favourites, setFavourites] = useState<number[]>([])
  const addFavourite = useCallback((id: number) => {
    setFavourites(prev => [...prev, id])
  }, []);
  const removeFavourite = useCallback((id: number) =>
    setFavourites(prev => {
      const copy = [...prev];
      const index = copy.indexOf(id)
      if (index !== -1) {
        copy.splice(index, 1)
      }
      return copy;
    }), [])
  const [query, setQuery] = useState('')
  const handleSearch = (event: any) => {
    setQuery((event.target.value).toLowerCase());
  }
  const filterList = useMemo((): Character[] => {
    if (query !== '') {
      console.log(query)
      return data.filter((char) => (char.name).toLowerCase().includes(query))

    } else {
      return data
    }
    return data
  }, [data, query])


  return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite, filterList }}>
      <div className="App">
        <SearchAppBar search={handleSearch} />

        <Routes>
          <Route path="characters" element={<CharactersPage />} />
          <Route path="character/:id" element={<CharacterPage />} />
          <Route path="favourite" element={<FavouritePage />} />
        </Routes>
      </div>
    </FavouriteContext.Provider>
  );
}

export default App;
