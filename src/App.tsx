import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import CharactersPage from "./pages/CharactersPage";
import FavouritePage from "./pages/FavouritePage";
import SearchAppBar from './components/app-bar';
import { data } from './data/mock';
import { Character } from './interface/character';

export const FavouriteContext = React.createContext({ favourites: [] as number[], addFavourite(id: number) { }, removeFavourite(id: number) { } });
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


  return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      <div className="App">
        <Link to="/characters">All </Link>
        <Link to="/favourite">Favourite</Link>
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
