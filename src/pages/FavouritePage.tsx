import { Container } from '@mui/material';
import { stringify } from 'querystring';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavouriteContext } from '../App';
import ListCharacter from '../components/characterList';
import { Character } from '../interface/character';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
function FavouritePage() {
    const { favourites, removeFavourite, filterList } = useContext(FavouriteContext)
    const favouritesList = useMemo(() =>
        filterList.filter((item) => favourites.includes(item.id))
        , [filterList, favourites])
    return (

        <Container maxWidth="sm" sx={{ marginTop: 2 }}>
            <ListCharacter characters={favouritesList}
                isButtonActive={(character: Character) => favourites.includes(character.id)}
                activIcon={<HeartBrokenIcon style={{ color: "red" }} />}
                buttonAction={removeFavourite}
            />

        </Container>
    );
}

export default FavouritePage;