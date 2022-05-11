import React from 'react';
import { Link } from 'react-router-dom';
import { data } from "../data/mock"
function CharactersPage() {

    return (
        <div >
            Characters Page
            <ul>
                {data.map(character => 
                    <Link key={character.id} to={`/character/${character.id}`}><li>{character.name}</li></Link>
                )}
            </ul>
        </div>
    );
}

export default CharactersPage;