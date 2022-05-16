import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import CharactersPage from "./pages/CharactersPage";
import FavouritePage from "./pages/FavouritePage";
import SearchAppBar from './components/AppBar';
import { Character } from './interface/character';
import TabsLabel from './components/Tabs';
import { createTheme, ThemeProvider } from '@mui/material';
import { getData } from './data/data';
import CircularProgres from './components/Progres';
export const theme = createTheme({
  palette: {
    primary: {
      main: "#10aec6",
    },
  },
});

export const FavouriteContext = React.createContext({
  characters: [] as Character[], favourites: [] as number[], addFavourite(id: number) { },
  removeFavourite(id: number) { }, setCurrentTab(tab: string) { }
});
function App() {
  const [favourites, setFavourites] = useState<number[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [characters, setCharacters] = useState<Character[] | [] >([])
  const [query, setQuery] = useState('')
  const [currentTab, setCurrentTab] = useState('')
  
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

  const handleSearch = (event: any) => 
    setQuery((event.target.value).toLowerCase());
  

  useEffect(() => {
    setLoading(true)
    getData(query).then((result) => setCharacters(result?.results || []))
      .finally(() => setLoading(false))
  }, [query])




  return (
    <ThemeProvider theme={theme}>
      <FavouriteContext.Provider value={{ favourites, characters: characters, addFavourite, removeFavourite, setCurrentTab }}>
        <SearchAppBar search={handleSearch} />
        <TabsLabel currentTab={currentTab} />
        <div className="App">
          {isLoading && <CircularProgres />}
          {!isLoading &&
            <Routes>
              <Route path="/" element={<Navigate to="/characters"/>} />
              <Route path="characters" element={<CharactersPage />} />
              <Route path="character/:id" element={<CharacterPage />} />
              <Route path="favourite" element={<FavouritePage />} />
            </Routes>}
        </div>
      </FavouriteContext.Provider>
    </ThemeProvider>
  );
}

export default App;
