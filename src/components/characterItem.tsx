import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Character } from '../interface/character';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCallback, useContext } from 'react';
import { FavouriteContext } from '../App';

export interface ListItemCharacretProps {
    character: Character;
    buttonAction: (id: number) => void;
    isButtonActive: (character: Character) => boolean;
    addButton: any;
    blockButton: any;
}

export default function ItemCharacter({ character, buttonAction,
    addButton, blockButton, isButtonActive }: ListItemCharacretProps) {
    const { favourites, addFavourite } = useContext(FavouriteContext)
    // const handleClick =  useCallback(() => buttonAction(character.id), [buttonAction, character]);
    return (
        <>
            <ListItem key={character.id} alignItems="flex-start" secondaryAction={
                isButtonActive(character)
                    ? <IconButton onClick={() => buttonAction(character.id)}>{addButton}</IconButton>
                    : <span>{blockButton}</span>
            }>

                <ListItemAvatar>
                    <Link to="{`/character/${character.id}`}">
                        <Avatar alt={character.name} src={character.image} /></Link>
                </ListItemAvatar>
                <ListItemText
                    primary={<Link to={`/character/${character.id}`}>{character.name}</Link>}
                />

            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}
