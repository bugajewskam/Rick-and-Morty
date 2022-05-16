import { Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import { FavouriteContext } from '../App';
import CharacterList from '../components/CharacterList';
import { Character } from '../interface/character';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NoResults from '../components/NoResults';


function CharactersPage() {
    const { favourites, addFavourite, setCurrentTab, characters } = useContext(FavouriteContext)
    useEffect(() => setCurrentTab('characters'));
    return (
        <Container maxWidth="sm" sx={{ marginTop: 2 }}>
            <CharacterList characters={characters}
                addButton={<FavoriteBorderOutlinedIcon style={{ color: "red" }} />}
                blockButton={<FavoriteIcon style={{ color: "red", padding: 8 }} />}
                buttonAction={addFavourite}
                isButtonActive={(character: Character) => !favourites.includes(character.id)} />
        </Container>
    );
}

export default CharactersPage;