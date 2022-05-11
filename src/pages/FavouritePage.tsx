import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FavouriteContext } from '../App';
import { data } from '../data/mock';

function FavouritePage() {
    const { favourites, removeFavourite } = useContext(FavouriteContext)
    const favouriteData = useMemo(()=>data.filter((item)=>favourites.includes(item.id)),[favourites])
    console.log(favouriteData)
    return (
        <div > Favourite
                        <ul>
                {favouriteData.map(char =>
                    
                        <li key={char.id}>
                           {char.name}
                           <button onClick={()=>removeFavourite(char.id)}>delete</button>
                        </li>
            
                )}
            </ul>

        </div>
    );
}

export default FavouritePage;