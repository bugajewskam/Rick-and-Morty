import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import CharactersPage from "./pages/CharactersPage";

export const FavouriteContext = React.createContext({ favourites: [] as number[], addFavourite(id: number) { }, removeFavourite(id: number) { } });
function App() {
  const [favourites, setFavourites] = useState<number[]>([])
  const addFavourite = useCallback((id: number) => {
    setFavourites(prev => [...prev, id])
  }, [])

  return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite: (id) => { } }}>
      <div className="App">
        <Routes>
          <Route path="characters" element={<CharactersPage />} />
          <Route path="character/:id" element={<CharacterPage />} />


        </Routes>
      </div>
    </FavouriteContext.Provider>
  );
}

export default App;
