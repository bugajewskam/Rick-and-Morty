import { Avatar, Card, CardContent, Container, Typography } from '@mui/material';
import { useContext, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FavouriteContext } from '../App';
import NoResults from '../components/NoResults';
import Progres from '../components/Progres';
import { getCharacter } from '../data/data';
import { Character } from '../interface/character';

function CharacterPage() {
    const { id } = useParams();
    const { setCurrentTab } = useContext(FavouriteContext);
    const [character, setCharacter] = useState<Character | null>(null)
    const [isLoading, setLoading] = useState<boolean>(true)
    const entries = useMemo(() => character ? {
        "Status": character.status,
        "Species": character.species,
        "Type": character.type,
        "Gender": character.gender,
        "Origin": character.origin?.name,
        "Location": character.location?.name
    } : {}, [character])
    useEffect(() => setCurrentTab(''));
    useEffect(() => {
        getCharacter(id).then(result => setCharacter(result))
            .catch(() => setCharacter(null))
            .finally(() => setLoading(false))
    }, [id])

    if (isLoading) {
        return <Progres />
    }

    if (!character) {
        return <NoResults />
    }

    return (
        <Container maxWidth="sm" sx={{ marginTop: 2 }}>
            <Card sx={{ minWidth: 275, margin: 2 }}>
                <CardContent>
                    <Avatar sx={{ height: 128, width: 128, margin: "0 auto 8px" }} src={character.image} />
                    <Typography variant="h5" component="div">
                        {character.name}
                    </Typography>
                    {Object.entries(entries).map(([title, value]) =>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {`${title}: ${value || 'n/a'}`}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Container>
    )
}

export default CharacterPage;