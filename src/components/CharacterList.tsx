import List from '@mui/material/List';
import { Character } from '../interface/character';
import CharacterItem from './CharacterItem';
import NoResults from './NoResults';


export interface CharacterListProps {
    characters: Character[];
    buttonAction: (id: number) => void
    addButton: any;
    blockButton?: any;
    isButtonActive: (character: Character) => boolean;
}

export default function CharacterList({ characters, buttonAction, addButton, isButtonActive, blockButton }: CharacterListProps) {
    return (
        <>
            {characters?.length > 0 ?
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {characters.map((item) =>
                        <CharacterItem character={item}
                            buttonAction={buttonAction}
                            addButton={addButton}
                            blockButton={blockButton}
                            isButtonActive={isButtonActive}
                        />
                    )}
                </List> : <NoResults />}
        </>
    );
}
