import { Character, Info } from "../interface/character"

export const  getData = async(query: string):Promise<Info<Character[]>>=>{
    return await(await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)).json()
}

export const getCharacter = async(id: string | undefined):Promise<Character>=>{
    return await(await fetch(`https://rickandmortyapi.com/api/character/${id}`)).json()
}




