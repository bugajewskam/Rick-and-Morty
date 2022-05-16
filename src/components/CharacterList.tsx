import List from '@mui/material/List';
import { Character } from '../interface/character';
import CharacterItem from './CharacterItem';


export interface ListCharacretProps {
    characters: Character[];
    buttonAction: (id: number) => void
    activIcon: any;
    blockIcon?: any;
    isButtonActive: (character: Character) => boolean;
}

export default function CharacterList({ characters, buttonAction, activIcon, isButtonActive, blockIcon }: ListCharacretProps) {
    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {characters.map((item) =>
                    <CharacterItem character={item}
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
