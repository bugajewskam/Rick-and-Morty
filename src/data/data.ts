import { Character, Info } from "../interface/character";
const URL = "https://rickandmortyapi.com/api/character/";

const fetchData = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();
    if (!response.ok) {
        throw new Error(json);
    }
    return json;
}
export const listCharacters = async (query: string): Promise<Info<Character[]>> => {
    return await fetchData(`${URL}?name=${query}`);
}

export const getCharacter = async (id: string | undefined): Promise<Character> => {
    return await fetchData(`${URL}/${id}`);
}




