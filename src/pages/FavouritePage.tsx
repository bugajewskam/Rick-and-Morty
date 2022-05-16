import { Container } from '@mui/material';
import { useContext, useEffect, useMemo} from 'react';
import { FavouriteContext } from '../App';
import ListCharacter from '../components/CharacterList';
import { Character } from '../interface/character';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
function FavouritePage() {
    const { favourites, removeFavourite, characters, setCurrentTab } = useContext(FavouriteContext)
    const favouritesList = useMemo(() =>
        characters.filter((item) => favourites.includes(item.id))
        , [characters, favourites])
    useEffect(() => setCurrentTab('favourite'));
    return (

        <Container maxWidth="sm" sx={{ marginTop: 2 }}>
            <ListCharacter characters={favouritesList}
                isButtonActive={(character: Character) => favourites.includes(character.id)}
                addButton={<HeartBrokenIcon style={{ color: "red" }} />}
                buttonAction={removeFavourite}
            />

        </Container>
    );
}

export default FavouritePage;