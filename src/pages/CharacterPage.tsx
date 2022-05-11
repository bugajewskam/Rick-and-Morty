import React from 'react';
import { useParams } from 'react-router-dom';

function CharacterPage() {
    let {id} = useParams();
    return (
        <div >
            Character Page {id}
        </div>
    );
}

export default CharacterPage;