import { Avatar, Card, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import SearchAppBar from '../components/app-bar';
import { data } from '../data/mock';

function CharacterPage() {
    const { id } = useParams();
    const character = data.find(item => item.id === parseInt(id || '-1'))
    if (!character) {
        return <div>Character not found</div>
    }
    const entries = {
        "Status": character.status,
        "Species": character.species,
        "Type": character.type,
        "Gender": character.gender,
        "Origin": character.origin?.name,
        "Location": character.location?.name 
    }
    return (
        <Container maxWidth="sm" sx={{ marginTop: 2 }}>
            <Card sx={{ minWidth: 275 , margin:2}}>
                <CardContent>
                    <Avatar sx={{height: 128, width: 128, margin:"0 auto 8px"}} src={character.image} />
                    <Typography variant="h5" component="div">
                        {character?.name}
                    </Typography>
                    {Object.entries(entries).map(([title,value])=>
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