import { Container } from '@mui/material';
import { stringify } from 'querystring';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavouriteContext } from '../App';
import SearchAppBar from '../components/app-bar';
import ListCharacter from '../components/characterList';
import { data } from "../data/mock"
import { Character } from '../interface/character';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
function CharactersPage() {
    const { filterList, favourites, addFavourite } = useContext(FavouriteContext)
    return (
        <div >

            <Container maxWidth="sm" sx={{ marginTop: 2 }}>
                <ListCharacter characters={filterList}
                    activIcon={<FavoriteBorderOutlinedIcon style={{ color: "red" }} />}
                    blockIcon={<FavoriteIcon style={{ color: "red", padding: 8 }} />}
                    buttonAction={addFavourite}
                    isButtonActive={(character:Character)=> !favourites.includes(character.id)}
                />

            </Container>
        </div>
    );
}

export default CharactersPage;