import { stringify } from 'querystring';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavouriteContext } from '../App';
import SearchAppBar from '../components/app-bar';
import { data } from "../data/mock"
import { Character } from '../interface/character';
function CharactersPage() {
    const { favourites, addFavourite } = useContext(FavouriteContext)
    console.log(favourites)
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
    }, [data, query]
    )
    return (
        <div >
            <SearchAppBar search={handleSearch} />

            Characters Page
            <ul>
                {filterList.map(character =>

                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>{character.name}</Link>
                        {!favourites.includes(character.id) && <button onClick={() => addFavourite(character.id)}>Add to favourite</button>}
                    </li>

                )}
            </ul>
        </div>
    );
}

export default CharactersPage;