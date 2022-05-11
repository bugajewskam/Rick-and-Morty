import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouriteContext } from '../App';
import { data } from "../data/mock"
function CharactersPage() {
    const { favourites, addFavourite } = useContext(FavouriteContext)
    console.log(favourites)
    return (
        <div >
            Characters Page
            <ul>
                {data.map(character =>
                    
                        <li key={character.id}>
                            <Link to={`/character/${character.id}`}>{character.name}</Link>
                            {!favourites.includes(character.id) && <button onClick={() => addFavourite(character.id) }>Add to favourite</button>}
                        </li>
            
                )}
            </ul>
        </div>
    );
}

export default CharactersPage;