import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Character } from '../interface/character';
import ItemCharacter from './characterItem';
import { useContext } from 'react';
import { FavouriteContext } from '../App';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from '@mui/icons-material';

export interface ListCharacretProps {
    characters: Character[];
    buttonAction: (id:number)=>void
    activIcon:any;
    blockIcon?: any;
    isButtonActive: (character:Character)=> boolean;
}

export default function ListCharacter({ characters, buttonAction, activIcon, isButtonActive, blockIcon}: ListCharacretProps) {
    return (
        <>
            <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                {characters.map((item) =>
                    <ItemCharacter character={item}
                        buttonAction={buttonAction}
                        addButton={activIcon}
                        blockButton={blockIcon}
                        isButtonActive={isButtonActive}
                        />

                )}


            </List>
        </>
    );
}
