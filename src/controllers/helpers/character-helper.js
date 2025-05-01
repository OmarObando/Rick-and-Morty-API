
const replaceSpacesInName = (character) => {
    const newName = character.name.replace(/\s/g, "_");
    return {...character, name: newName};
}

const replaceSpaces = (characters) => {
    const newCharacters = characters.map(replaceSpacesInName);
    return newCharacters;
}

const characterFormatter = (character) => {
    const cleanCharacter = {
        id: character.id,
        name: character.name,
        status: character.status,
        gender: character.gender
    }
    return cleanCharacter;
}

const formatCharacters = (characters) => {
    const characterCleaned = characters.map(characterFormatter);
    return characterCleaned;
}

const getAliveCharacters = (characters) => {
    return characters.filter(character => character.status === 'Alive');
}

module.exports = {
    replaceSpaces,
    formatCharacters,
    getAliveCharacters
}